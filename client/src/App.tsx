import { useEffect } from 'react';
import useLocation from './assets/hooks/useLocation';
import { useDispatch } from 'react-redux';
import { setLocation } from './redux/reducers/map_reducer/actions/actions';
import Panel from './components/Panel/Panel';
import Navbar from './components/Navbar/Navbar';
import YandexMap from './components/YandexMap/YandexMap';
import './App.css';

const App = () => {
  const [location] = useLocation([55.76, 37.64]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (location) {
      dispatch(setLocation(location));
    }
  }, [location, dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Panel />
      <YandexMap />
    </div>
  );
};

export default App;
