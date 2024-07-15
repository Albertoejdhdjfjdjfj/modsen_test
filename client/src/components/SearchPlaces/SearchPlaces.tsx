import CategoriesList from './CategoriesList/CategoriesList';
import SearchInput from './SearchInput/SearchInput';
import NumberInput from './NumberInput/NumberInput';
import { useDispatch, useSelector } from 'react-redux';
import useLocation from '../../assets/hooks/useLocation';
import { fetchPlaces } from '../../redux/reducers/map_reducer/actions/actions';
import glass from '../../assets/images/white_glass.svg';
import './SearchPlaces.css';
import { State } from '../../redux/combine_reducers';

const SearchPlaces = () => {
  const [location] = useLocation([55.76, 37.64]);
  const filterState = useSelector((state: State) => state.filter_state);
  const dispatch = useDispatch();

  function sendForm(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    dispatch(
      fetchPlaces({ categories: filterState.categories, radius: filterState.radius, location })
    );
  }

  return (
    <form className="search_places">
      <SearchInput />
      <CategoriesList />
      <NumberInput />
      <button type="button" onClick={sendForm}>
        <img src={glass} />
      </button>
    </form>
  );
};

export default SearchPlaces;
