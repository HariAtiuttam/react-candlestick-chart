
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Chartpage from './pages/Chartpage';
import About from './pages/About';


function App() {
  
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/chart' element={<Chartpage />} />
          <Route path='/about' element={<About />} />
      </Routes>
      
    </Router>
  )
}

export default App
