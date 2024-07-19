import { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchWay } from '../../../redux/middleware/functions';
import { stopRoute } from '../../../redux/reducers/map_reducer/actions/actions';
import './RouteCard.css';
import finishRoute from '../../../assets/images/crossRoads.svg'
import { State } from '../../../redux/combine_reducers';
import { WayResponse } from '../../../redux/reducers/interfaces';

const RouteCard = () => {
  const [currentDistance, setDistance] = useState<number>(0);
  const [restTime, setRestTime] = useState<number>(0);
  const distance: number = useSelector((state: State) => state.map_state.way?.routes[0].distance);
  const location: [number, number] = useSelector((state: State) => state.map_state.location);
  const endPoint: [number, number] = useSelector((state: State) => state.map_state.endPoint);
  const dispatch = useDispatch();

  useEffect(() => {
    const getWayData = async () => {
      const data: WayResponse = await fetchWay(location, endPoint as [number, number]);
      setDistance(data.routes[0].distance);
      setRestTime(data.routes[0].duration);
    };
    getWayData();
  });

  function parseTime(time) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    const formatHours = String(hours);
    const formatMinutes = String(minutes).padStart(2, '0');
    return `${formatHours} ч ${formatMinutes} мин`;
  }

  return (
    <div className="route_card">
      
    <img onClick={()=>dispatch(stopRoute())} src={finishRoute}/>
      
      <div>
        <div style={{ width: `${((distance-currentDistance)/distance)*100}%`}}></div>
      </div>
      <span>
        <div>
          <p>{Math.round(currentDistance / 1000).toFixed(1)}км</p>
          <span>дистанция</span>
        </div>
        <div>
          <p>{parseTime(Math.round(restTime / 60).toFixed(0))}</p>
          <span>примерное время</span>
        </div>
      </span>
    </div>
  );
};

export default RouteCard;
