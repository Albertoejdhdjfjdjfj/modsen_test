import noPhoto from '../../../assets/images/noPhoto.jpg';
import bookMark from '../../../assets/images/redBookMark.svg';
import arrow from '../../../assets/images/arrowRight.svg';
import './Favorites.css';
import { useLocalStorage } from '../../../assets/constants/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPlace } from '../../../redux/reducers/place_reducer/actions/actions';
import { Feature } from '../../../redux/reducers/interfaces';

const Favorites = () => {
  const [favorites] = useLocalStorage();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick(place: Feature) {
    dispatch(setPlace(place));
    navigate('/card');
  }

  return (
    <div className="favorites">
      <h2>Избранное:</h2>
      <div>
        {favorites.map((place: Feature) => (
          <div onClick={() => handleClick(place)}>
            <span>
              <img src={noPhoto} />
              {place?.properties?.name && <h3>{place.properties.name}</h3>}
            </span>

            {place?.properties?.description && <p>Адрес: {place.properties.description}</p>}
            {place?.properties?.CompanyMetaData?.Hours?.text && (
              <p>Время работы: {place.properties.CompanyMetaData.Hours.text}</p>
            )}
            {place?.properties?.CompanyMetaData?.Phones[0]?.formatted && (
              <p>Телефон: {place.properties.CompanyMetaData.Phones[0].formatted}</p>
            )}

            <div>
              <img src={bookMark} />
              <img src={arrow} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
