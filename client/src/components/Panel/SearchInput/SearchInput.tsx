import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Suggest } from './interfaces';
import { fetchPlace } from '../../../redux/reducers/place_reducer/actions/actions';
import glass from '../../../assets/images/glass.svg';
import './SearchInput.css';
const API_KEY = process.env.REACT_APP_KEY_API_AUTO_COMPLETE;

const SearchInput = () => {
  const [suggstions, setSuggestions] = useState<Array<Suggest> | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  console.log(API_KEY)

  async function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const data = await fetch(
      `https://suggest-maps.yandex.ru/v1/suggest?text=${e.target.value}&apikey=${API_KEY}`
    );
    const result = await data.json();
    setSuggestions(result.results);
  }

  function selectPlace(place: string) {
    dispatch(fetchPlace(place));
    if (inputRef.current) {
      inputRef.current.value = place;
    }
    setSuggestions(null);
    navigate('/card');
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      dispatch(fetchPlace(e.target.value));
      setSuggestions(null);
      navigate('/card');
    }
  }

  return (
    <div className="search_input">
      <img src={glass} />
      <input
        ref={inputRef}
        type="text"
        placeholder="Место,адрес..."
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      {suggstions && (
        <div>
          {suggstions.map((el: Suggest, index) => (
            <p key={index} onClick={() => selectPlace(`${el?.title?.text} ${el?.subtitle?.text}`)}>
              {el?.title?.text} {el?.subtitle?.text}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
