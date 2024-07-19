import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchInput from './SearchInput/SearchInput';
import Filter from './Filter/Filter';
import PlaceCard from './PlaceCard/PlaceCard';
import Favorites from './Favorites/Favorites';
import arrowLeft from '../../assets/images/arrowLeft.svg';
import arrowRight from '../../assets/images/arrowRight.svg';
import './Panel.css';

const Panel = () => {
const[displayPanel,changeDisplay]=useState<boolean>(true)
  return (
    <div className="panel" id={displayPanel?'active':'inactive'} >
      <SearchInput />
      <Routes>
        <Route path="/" element={<Filter />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/card" element={<PlaceCard />} />
      </Routes>
      <div onClick={()=>changeDisplay((state:boolean)=>!state)}>
        <img src={displayPanel?arrowLeft:arrowRight}/>
      </div>
    </div>
  );
};

export default Panel;
