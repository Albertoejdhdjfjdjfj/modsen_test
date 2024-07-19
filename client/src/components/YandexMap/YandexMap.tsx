import { Map, Placemark, Circle, Polyline } from '@pbe/react-yandex-maps';
import userMark from '../../assets/images/userMark.svg';
import './YandexMap.css';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPlace } from '../../redux/reducers/place_reducer/actions/actions';
import { State } from '../../redux/combine_reducers';
import { CategoryPlaces, Feature, WayResponse } from '../../redux/reducers/interfaces';
import RouteCard from './RouteCard/RouteCard';

const YandexMap = () => {
  const location: [number, number] = useSelector((state: State) => state.map_state.location);
  const places: Array<CategoryPlaces> = useSelector((state: State) => state.map_state.places);
  const radius: number = useSelector((state: State) => state.filter_state.radius);
  const way: Array<[number,number]> | undefined = useSelector((state: State) => state.map_state.way?.routes[0].geometry.coordinates);
  const endPoint: [number, number] | null = useSelector((state: State) => state.map_state.endPoint);
  const dispatch = useDispatch();
  const navigate=useNavigate();

  function placeClick(place:Feature){
    dispatch(fetchPlace(place.properties.CompanyMetaData.address));
    navigate('/card')
  }

  return (
    <div className="map_wrapper">
      <Map
        state={{
          center: location,
          zoom: 16
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
          geometry={[location, radius*100]}
          options={{
            fillColor: '#5E7BC7',
            fillOpacity: 0.2,
            strokeWidth: 0
          }}
        />
        {places.map((el: CategoryPlaces) =>
          el.places.map((place) => (
            <Placemark
              onClick={()=>placeClick(place)}
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
              geometry={[location,...(way.map(([a, b]) => [b, a])),[endPoint[1],endPoint[0]]]}
              options={{
                strokeColor: '#C75E5E',
                strokeWidth: 8
              }}
            />

            <Placemark
              geometry={[endPoint[1],endPoint[0]]}
              options={{
                iconLayout: 'default#image',
              }}
            />
          </>
        )}
      </Map>
      {way&&<RouteCard/>}
    </div>
  );
};

export default YandexMap;
