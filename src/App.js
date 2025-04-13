
import './App.css';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import Solution from './pages/Solution';
import Problem from './pages/Problem';
import Ctasection from './pages/CTAsection'
import Header from './pages/Header';
import Traction from './pages/Traction';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} />
        <Routes>
          <Route path="/"element={<Hero darkMode={darkMode} />} />
          <Route path="/solution" element={<Solution darkMode={darkMode} />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/traction" element={<Traction />} />
          <Route path="/cta" element={<Ctasection />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}


export default App;
