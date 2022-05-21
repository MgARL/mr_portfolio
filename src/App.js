import './App.css';
import './assets/themes/bootstrap.lux.min.css';
import { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

// MyComps
import MyNavBar from './components/MyNavBar';
import AnimatedRoutes from './helperComponents/AnimatedRoutes';

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
        <AnimatedRoutes/>
        </div>
        <MyNavBar showNavBar={showNavBar} handleNavToggle={handleNavToggle} closeNavOnly={closeNavOnly} firstLoad={firstLoad} Link={Link} />
      </Router>
    </div>
  );
}

export default App;
