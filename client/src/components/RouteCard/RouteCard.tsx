import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchWay } from '../../redux/middleware/functions';
import './RouteCard.css';
import { State } from '../../redux/combine_reducers';
import { WayResponse } from '../../redux/reducers/interfaces';

const RouteCard = () => {
  const [currentDistance, setDistance] = useState<number>(0);
  const distance: number = useSelector((state: State) => state.map_state.way?.routes[0].distance);
  const location: [number, number] = useSelector((state: State) => state.map_state.location);
  const endPoint: [number, number] = useSelector((state: State) => state.map_state.endPoint);

  useEffect(() => {
    const getWayData = async () => {
      const data: WayResponse = await fetchWay(location, endPoint as [number, number]);
      setDistance(data.routes[0].distance);
    };
    getWayData();
  });

  return (
    <div className="route_card">
      <div>
        <div style={{ width: distance - currentDistance }}></div>
      </div>
      <span></span>
    </div>
  );
};

export default RouteCard;
