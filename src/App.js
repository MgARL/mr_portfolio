import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// MyComps
import MyNavBar from './components/MyNavBar';

function App() {
  return (
    <div className="d-flex flex">
      <MyNavBar />
      <div className='main-container'>main container</div>
    </div>
  );
}

export default App;
