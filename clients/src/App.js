import logo from './logo.svg';
import './App.css';


import Question from './components/Question';
import { Routes ,Route} from 'react-router-dom';
import Review from './components/Review';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={<Question/>} />
        <Route path='review' element ={<Review/>} />
     
      </Routes>
   
    </div>
  );
}

export default App;
