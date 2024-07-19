import { useEffect } from 'react';
import useLocation from './assets/hooks/useLocation';
import { useDispatch,useSelector } from 'react-redux';
import { setLocation } from './redux/reducers/map_reducer/actions/actions';
import Panel from './components/Panel/Panel';
import SideBar from './components/SideBar/SideBar';
import YandexMap from './components/YandexMap/YandexMap';
import './App.css';

const App = () => {
  const [location] = useLocation([55.76, 37.64]);
  const dispatch = useDispatch();
  console.log(process.env)  
  useEffect(() => {
    if (location) {
      dispatch(setLocation(location));
    }
  }, [location, dispatch]);

  return (
    <div className="App">
      <SideBar />
      <Panel />
      <YandexMap />
    </div>
  );
};

export default App;
