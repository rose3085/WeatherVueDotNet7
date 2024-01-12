import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter as Router, Link , Route, Routes} from 'react-router-dom';
import './App.css';
import Location from './components/Location';
import WeatherMap from './components/WeatherMap';
import CurrentWeather from './components/CurrentWeather';
import LoginSuccessful from './components/LoginSuccessful';

function App() {
  return (
      <div className="App">
          <Router>
              <Link to="Login"></Link>
          <Routes>
                  <Route path='/' element={<Login />}></Route>
                  <Route path='/Register' element={<Register />}></Route>
                  <Route path='/Location' element={<Location/>}></Route>
                  <Route path='/WeatherMap' element={<WeatherMap />}></Route>
                  <Route path='/LoginSuccessful' element={<LoginSuccessful />}></Route>
                  <Route path='/CurrentWeather' element={<CurrentWeather />}></Route>
          </Routes>
              </Router>
    </div>
  );
}

export default App;
