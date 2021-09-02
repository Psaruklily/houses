import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import HouseDetails from './components/House-details/HouseDetails';
import { QueryParamProvider } from 'use-query-params';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [textFromInput, setTextFromInput] = useState('');
  
  return (
    <div>
      <Router>
        {/* <QueryParamProvider ReactRouterRoute={Route}> */}
          <Header onChange={(e) => setTextFromInput(e.target.value.toLowerCase())}/>
          <hr className='line'/>
          <Switch>
            <Route exact path='/houses/:id' component={HouseDetails}/> 
            <Route exact path='/'>
              <Home textFromInput = {textFromInput}/>
            </Route>
          </Switch>
        {/* </QueryParamProvider> */}
      </Router>
    </div>
  );
}

export default App;
