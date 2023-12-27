import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter as Router, Link , Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
      <div className="App">
          <Router>
              <Link to="Login"></Link>
          <Routes>
                  <Route path='/' element={<Login />}></Route>
                  <Route path='/Register' element={<Register />}></Route>
          </Routes>
              </Router>
    </div>
  );
}

export default App;
