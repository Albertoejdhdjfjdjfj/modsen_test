import { YMaps, Map, Placemark, Circle } from '@pbe/react-yandex-maps';
import useLocation from '../../assets/hooks/useLocation';
import userMark from '../../assets/images/userMark.svg';
import './YandexMap.css';
import { useSelector } from 'react-redux';
import { State } from '../../redux/combine_reducers';
import { CategoryPlaces } from '../../redux/reducers/interfaces';

const YandexMap = () => {
  const [location] = useLocation([55.76, 37.64]);
  const places: Array<CategoryPlaces> = useSelector((state: State) => state.map_state.places);
  const radius: number = useSelector((state: State) => state.filter_state.radius);
  return (
    <div className="map_wrapper">
      <Map
        defaultState={{
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
      </Map>
    </div>
  );
};

export default YandexMap;
