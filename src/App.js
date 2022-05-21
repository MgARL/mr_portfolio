import './App.css';
import './assets/themes/bootstrap.lux.min.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// MyComps
import MyNavBar from './components/MyNavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [showNavBar, setNavBar] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true)
  const handleNavToggle = () => {
    if (showNavBar) {
      setNavBar(false)
      setFirstLoad(false)
      return
    }
    setNavBar(true)
  }

  const closeNavOnly = () => {
    if (showNavBar) {
      setNavBar(false)
    }
  }
  return (
    <div className='App bg-1'>
      <Router>
        <div className='main-container' onClick={closeNavOnly}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>      
        </div>
        <MyNavBar showNavBar={showNavBar} handleNavToggle={handleNavToggle} closeNavOnly={closeNavOnly} firstLoad={firstLoad} Link={Link} />

      </Router>
    </div>
  );
}

export default App;
