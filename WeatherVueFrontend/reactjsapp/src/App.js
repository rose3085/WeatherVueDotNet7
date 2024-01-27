import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter as Router, Link , Route, Routes} from 'react-router-dom';
import './App.css';
import Location from './components/Location';
import WeatherMap from './components/WeatherMap';
import CurrentWeather from './components/HomePage/CurrentWeather';
import LoginSuccessful from './components/LoginSuccessful';
import Weather from './components/HomePage/Weather';
import ThreeHourForecast from './components/HomePage/ThreeHourForecast';
import LoadingSpinner from './components/LoadingSpinner';
import AirQuality from './components/HomePage/AirQuality';
import LogOut from './components/HomePage/LogOut';
import DeleteUser from './components/HomePage/DeleteUser';
import LogOutLoader from './components/HomePage/LogOutLoader';

function App() {
  return (
      <div className="App">
          <Router>
              <Link to="Login"></Link>
          <Routes>
                  <Route path='/' element={<Login />}></Route>
                  <Route path='/Register' element={<Register />}></Route>
                  <Route path='/DeleteUser' element={<DeleteUser/>}></Route>
                  <Route path='/WeatherMap' element={<WeatherMap />}></Route>
                  <Route path='/LoginSuccessful' element={<LoginSuccessful />}></Route>
                  <Route path='/CurrentWeather' element={<CurrentWeather />}></Route>
                  <Route path='ThreeHourForecast' element={<ThreeHourForecast/>}></Route>
                  <Route path='/Weather' element={<Weather />}></Route>
                  <Route path='/LoadingSpinner' element={<LoadingSpinner />}></Route>
                  <Route path='/LogOutLoader' element={<LogOutLoader/>}></Route>
                  <Route path='/LogOut' element={<LogOut/>}></Route>
                  
          </Routes>
              </Router>
    </div>
  );
}

export default App;
