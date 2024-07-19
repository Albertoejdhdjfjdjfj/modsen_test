import { useLocation,useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import blueGlass from '../../assets/images/blueGlass.svg';
import whiteBookMark from '../../assets/images/whiteBookMark.svg'
import redBookMark from '../../assets/images/redBookMark.svg'
import whiteGlass from '../../assets/images/whiteGlass.svg';

import './SideBar.css';
const SideBar = () => {
  const path = useLocation();
  const navigate = useNavigate();

  return <div className="sidebar">
    <img src={logo}/>

    <nav>
      <div onClick={()=>navigate('/')} className ={path.pathname == '/'?'white':'blue'}>
        <img src={path.pathname == '/'?blueGlass:whiteGlass}/>
      </div>

      <div onClick={()=>navigate('/favorites')} className ={path.pathname == '/favorites'?'white':'red'}>
        <img src={path.pathname == '/favorites'?redBookMark:whiteBookMark}/>
      </div>
    </nav>
  </div>;
};

export default SideBar;
