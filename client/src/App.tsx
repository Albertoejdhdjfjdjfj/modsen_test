import Panel from './components/Panel/Panel';
import Navbar from './components/Navbar/Navbar';
import YandexMap from './components/YandexMap/YandexMap';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Panel />
      <YandexMap />
    </div>
  );
};

export default App;
