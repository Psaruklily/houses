import React from 'react';
import './App.css';
import {Houses} from './components/AllHouses';
import {Header} from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <hr className='line'/>
      <div className='page-wrapper'>
        <Houses />
      </div>
    </div>
  );
}

export default App;
