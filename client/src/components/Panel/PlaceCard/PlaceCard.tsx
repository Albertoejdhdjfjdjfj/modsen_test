import { useDispatch, useSelector } from 'react-redux';
import { fetchWay, setEndPoint } from '../../../redux/reducers/map_reducer/actions/actions';
import { State } from '../../../redux/combine_reducers';
import { Feature } from '../../../redux/reducers/interfaces';
import { useLocalStorage } from '../../../assets/constants/useLocalStorage';
import arrow from '../../../assets/images/arrowLeft.svg';
import noPhoto from '../../../assets/images/noPhoto.jpg';
import bookmark from '../../../assets/images/bookmark.svg';
import mapMark from '../../../assets/images/mapMark.svg';
import './PlaceCard.css';

const PlaceCard = () => {
  const [favorites, addCard, deleteCard] = useLocalStorage();
  const place: Feature | null = useSelector((state: State) => state.place_state.place);
  const location: [number, number] | null = useSelector((state: State) => state.map_state.location);
  const dispatch = useDispatch();

  function inFavorites() {
    const index = favorites.findIndex(
      (el) => el.properties.CompanyMetaData.id == place?.properties.CompanyMetaData.id
    );
    console.log(index);
    if (index == -1) {
      return false;
    }

    return true;
  }

  function handleClickFavorites() {
    if (inFavorites()) {
      deleteCard(place as Feature);
    } else {
      addCard(place as Feature);
    }
  }

  function getWay() {
    dispatch(setEndPoint(place?.geometry.coordinates));
    dispatch(fetchWay({ start: location, end: place?.geometry.coordinates }));
  }

  return (
    <div className="place_card">
      <p>
        <img src={arrow} /> Избранное
      </p>
      <div>
        <img src={noPhoto} />
        <span>
          {place?.properties.name && <h2>{place.properties.name}</h2>}
          {place?.properties.description && <p>Адрес: {place.properties.description}</p>}
          {place?.properties.CompanyMetaData.Hours.text && (
            <p>Время работы: {place.properties.CompanyMetaData.Hours.text}</p>
          )}
          {place?.properties.CompanyMetaData.Phones[0].formatted && (
            <p>Телефон: {place.properties.CompanyMetaData.Phones[0].formatted}</p>
          )}
        </span>

       { place?.geometry.coordinates&& <div>
          <p onClick={handleClickFavorites}>
            <img src={bookmark} /> {inFavorites() ? 'Сохранено' : 'Сохранить'}
          </p>
          <p onClick={getWay}>
            <img src={mapMark} /> Маршрут
          </p>
        </div>
}
      </div>
    </div>
  );
};

export default PlaceCard;
