import { useDispatch } from 'react-redux';
import { inputText } from '../../../redux/reducers/filter_reducer/actions/actions';
import glass from '../../../assets/images/glass.svg';
import './SearchInput.css';

const SearchInput = () => {
  const dispatch = useDispatch();

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(inputText(e.target.value));
  }

  return (
    <div className="search_input">
      <img src={glass} />
      <input type="text" placeholder="Место,адрес..." onChange={handleInput} />
    </div>
  );
};

export default SearchInput;
