import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container'

// MyComps
import MyNavBar from './components/MyNavBar';

function App() {
  const [showNavBar, setNavBar] = useState(false);
    const handleNavToggle = () => {
        if (showNavBar){
            setNavBar(false)
            return
        }
        setNavBar(true)
    }
  return (
    <div className='App'>
      <div className='main-container' onClick={()=>{
        if (showNavBar){
          setNavBar(false)
      }
      }}>
         <Container> Hello </Container>
      </div>
      <MyNavBar showNavBar={showNavBar} handleNavToggle={handleNavToggle} />
    </div>
  );
}

export default App;
