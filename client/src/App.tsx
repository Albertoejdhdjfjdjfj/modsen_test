import { useEffect } from 'react';
import useLocation from './assets/hooks/useLocation';
import { useDispatch,useSelector } from 'react-redux';
import { setLocation } from './redux/reducers/map_reducer/actions/actions';
import Panel from './components/Panel/Panel';
import Navbar from './components/Navbar/Navbar';
import YandexMap from './components/YandexMap/YandexMap';
import RouteCard from './components/RouteCard/RouteCard';
import './App.css';
import { WayResponse } from './redux/reducers/interfaces';
import { State } from './redux/combine_reducers';

const App = () => {
  const [location] = useLocation([55.76, 37.64]);
  const dispatch = useDispatch();
  const way:WayResponse|null = useSelector((state:State)=>state.map_state.way)

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
      {way&&<RouteCard/>}
    </div>
  );
};

export default App;
