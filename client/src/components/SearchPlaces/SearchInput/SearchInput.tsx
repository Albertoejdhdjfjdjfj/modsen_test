import glass  from '../../../assets/images/glass.svg';
import './SearchInput.css';
const SearchInput = () => {
  return (
    <div className="search_input">
      <img src={glass} title='glass'/>
      <input type="text" placeholder="Место,адрес..." />
    </div>
  );
};

export default SearchInput;
