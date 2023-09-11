import './App.css';
import Vehicle from './components/vehicle/Vehicle';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Arrival_Departure_Fuel from './components/arrive-fuel-departure/Arrival_Departure_Fuel';


function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/vehicle" element={<Arrival_Departure_Fuel />} />
        <Route path="/" element={<Vehicle navigate={navigate} />} />
      </Routes>
    </div>
  );
}

export default App;
