import { Route, Routes } from 'react-router-dom';
import SearchInput from './SearchInput/SearchInput';
import Filter from './Filter/Filter';
import PlaceCard from './PlaceCard/PlaceCard';
import Favorites from './Favorites/Favorites';
import './Panel.css';

const Panel = () => {
  return (
    <div className="panel">
      <SearchInput />
      <Routes>
        <Route path="/" element={<Filter />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/card" element={<PlaceCard />} />
      </Routes>
    </div>
  );
};

export default Panel;
