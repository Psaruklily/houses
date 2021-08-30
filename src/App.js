import React from 'react';
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
  return (
    <div>
      <Router>
        <Header />
        <hr className='line'/>
        <Switch>
        <Route exact path='/houses/:id' component={HouseDetails}/> 
        <Route exact path='/' component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
