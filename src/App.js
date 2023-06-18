import {Route, Routes} from 'react-router-dom'
import { HomePage } from './pages/home/HomePage';
import { LandingPage } from './pages/landing/LandingPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<LandingPage />} />
        <Route path = "/home" element = {<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
