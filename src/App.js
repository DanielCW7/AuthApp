import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import Home from './pages/home'
import Navbar from './components/nav';

function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
