import { Map, Placemark, Circle, Polyline } from '@pbe/react-yandex-maps';
import useLocation from '../../assets/hooks/useLocation';
import userMark from '../../assets/images/userMark.svg';
import './YandexMap.css';
import { useSelector } from 'react-redux';
import { State } from '../../redux/combine_reducers';
import { CategoryPlaces, WayResponse } from '../../redux/reducers/interfaces';

const YandexMap = () => {
  const location: [number, number] = useSelector((state: State) => state.map_state.location);
  const places: Array<CategoryPlaces> = useSelector((state: State) => state.map_state.places);
  const radius: number = useSelector((state: State) => state.filter_state.radius);
  const way: WayResponse | null = useSelector((state: State) => state.map_state.way);
  const endPoint: [number, number] | null = useSelector((state: State) => state.map_state.endPoint);

  return (
    <div className="map_wrapper">
      <Map
        state={{
          center: location,
          zoom: 20
        }}
        width="100%"
        height="100%"
      >
        <Placemark
          geometry={location}
          options={{
            iconLayout: 'default#image',
            iconImageHref: userMark,
            iconImageSize: [32, 24],
            iconImageOffset: [-16, -12]
          }}
        />

        <Circle
          geometry={[location, radius * 1000]}
          options={{
            fillColor: '#5E7BC7',
            fillOpacity: 0.1,
            strokeColor: '#5E7BC7',
            strokeOpacity: 0.2,
            strokeWidth: 3
          }}
        />
        <Circle
          geometry={[location, 100]}
          options={{
            fillColor: '#5E7BC7',
            fillOpacity: 0.2,
            strokeWidth: 0
          }}
        />
        {places.map((el: CategoryPlaces) =>
          el.places.map((place) => (
            <Placemark
              key={place.properties.CompanyMetaData.id}
              geometry={[place.geometry.coordinates[1], place.geometry.coordinates[0]]}
              options={{
                iconLayout: 'default#image',
                iconImageHref: el.category.icon,
                iconImageSize: [32, 24],
                iconImageOffset: [-16, -12]
              }}
            />
          ))
        )}

        {way && (
          <>
            <Polyline
              geometry={[location,...(way.routes[0].geometry.coordinates.map((el:[number,number])=>el.reverse())),endPoint?.reverse]}
              options={{
                strokeColor: '#C75E5E',
                strokeWidth: 8
              }}
            />

            <Placemark
              geometry={location}
            />

            <Placemark
              geometry={endPoint?.reverse()}
            />
          </>
        )}
      </Map>
    </div>
  );
};

export default YandexMap;
