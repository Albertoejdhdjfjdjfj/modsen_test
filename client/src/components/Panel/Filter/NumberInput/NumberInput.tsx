import { useSelector, useDispatch } from 'react-redux';
import { setRadius } from '../../../../redux/reducers/filter_reducer/actions/actions';
import { State } from '../../../../redux/combine_reducers';
import './NumberInput.css';

const NumberInput = () => {
  const radius = useSelector((state: State) => state.filter_state.radius);
  const dispatch = useDispatch();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const str = event.target.value;

    if (str === '') {
      dispatch(setRadius(0));
    }

    if (Number(str) >= 0) {
      dispatch(setRadius(Number(str)));
    }
  };

  return (
    <div className="number_input">
      <input type="number" value={radius ? radius : undefined} onChange={handleInput} min={0} />{' '}
      <p>км</p>
    </div>
  );
};

export default NumberInput;
