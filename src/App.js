import React from 'react';
import './App.css';
import {Houses} from './components/AllHouses';
import {Header} from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <hr className='line'/>
      <Houses />
    </div>
  );
}

export default App;
