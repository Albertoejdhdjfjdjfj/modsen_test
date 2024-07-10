import { YMaps, Map, Placemark, Circle } from '@pbe/react-yandex-maps';
import useLocation from '../../assets/hooks/useLocation';
import userMark from '../../assets/images/userMark.svg';
import './YandexMap.css';

const YandexMap = () => {
  const [location, error] = useLocation([55.76, 37.64]);

  return (
    <div className="map_wrapper">
      <YMaps>
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
            geometry={[location, 1000]}
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
        </Map>
      </YMaps>
    </div>
  );
};

export default YandexMap;
