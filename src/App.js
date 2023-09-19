import logo from './logo.svg';
import './App.css';
import Home from './Componentds/Home ';
import Navbar from './Componentds/Navbar';
import About from './Componentds/About';
import {Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
      </Routes>  
    </div>
  );
}

export default App;
