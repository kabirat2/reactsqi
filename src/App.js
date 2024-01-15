import image from './sqilogo.jpg';
import './App.css';


const App = () => {
  return (
    <div>
    {
    <div className='navbar'>
      <div className='nav'>
        <div className="bar">
      <img src={image} alt="" />
      <div className='about'>
    <nav>
      <ul>
        <li>About</li>
        <li>Programmes</li>
        <li>Admissions</li>
        <li>E-portal</li>
        <li>SQI Scholarship</li>
        <li>News</li>
      </ul>
    </nav>
    </div>
    </div>
      </div>
      <div className="background1">
        
      </div>
      </div>
    }
    </div>
  );

}

export default App;
