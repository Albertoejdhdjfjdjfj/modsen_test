import SearchPlaces from './components/SearchPlaces/SearchPlaces';
import Navbar from './components/Navbar/Navbar';
import YandexMap from './components/YandexMap/YandexMap';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPlaces />} />
      </Routes>
      <YandexMap />
    </div>
  );
};

export default App;
