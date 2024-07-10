import CategoriesList from './CategoriesList/CategoriesList';
import SearchInput from './SearchInput/SearchInput';
import NumberInput from './NumberInput/NumberInput';
import glass from '../../assets/images/white_glass.svg';
import './SearchPlaces.css';

const SearchPlaces = () => {
  return (
    <form className="search_places">
      <SearchInput />
      <CategoriesList />
      <NumberInput/>
      <button type='button' onClick={(e)=> e.preventDefault()}><img src={glass}/></button>
    </form>
  );
};

export default SearchPlaces;
