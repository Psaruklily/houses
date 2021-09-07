import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import HouseDetails from './components/House-details/HouseDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [textFromInput, setTextFromInput] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const inputFocus = () => {
    setIsFocus(!isFocus);
  }

  return (
    <div>
      <Router>
          <Header onFocus={inputFocus} onChange={(e) => setTextFromInput(e.target.value.toLowerCase())}/>
          <hr className='line'/>
          <Switch>
            <Route exact path='/houses/:id' component={HouseDetails}/> 
            <Route exact path='/'>
              <Home textFromInput={textFromInput} isFocus={isFocus}/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

// onChange={(e) => setTextFromInput(e.target.value.toLowerCase())}     header
// textFromInput = {textFromInput}    home
