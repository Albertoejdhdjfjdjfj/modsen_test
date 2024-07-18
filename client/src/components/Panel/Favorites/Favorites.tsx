import noPhoto from '../../../assets/images/noPhoto.jpg';
import bookMark from '../../../assets/images/redBookMark.svg';
import arrow from '../../../assets/images/arrowRight.svg';
import './Favorites.css';
import { useLocalStorage } from '../../../assets/constants/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { Feature } from '../../../redux/reducers/interfaces';

const Favorites = () => {
  const [favorites] = useLocalStorage();
  const navigate = useNavigate();

  return (
    <div className="favorites" onClick={()=>navigate('/card')}>
      {favorites.map((place: Feature) => (
        <div>
          <span>
            <img src={noPhoto} />
            {place?.properties.name && <h2>{place.properties.name}</h2>}
          </span>

          {place?.properties.description && <p>Адрес: {place.properties.description}</p>}
          {place?.properties.CompanyMetaData.Hours.text && (
            <p>Время работы: {place.properties.CompanyMetaData.Hours.text}</p>
          )}
          {place?.properties.CompanyMetaData.Phones[0].formatted && (
            <p>Телефон: {place.properties.CompanyMetaData.Phones[0].formatted}</p>
          )}

           <div><img src={bookMark}/><img src={arrow}/></div>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
