import React from 'react';
import './App.css';
import {Houses} from './components/AllHouses';
import {Header} from './components/Header';
import {ButtonFilter} from './components/ButtonFilter';

function App() {
  return (
    <div>
      <Header />
      <hr className='line'/>

      <div className='homesPageDesktop_filter'>
        <div className='filter-buttons'>
          <ButtonFilter text={'Beds and baths'}/>
          <ButtonFilter text={'Price'}/>
          <ButtonFilter text={'More filters'}/>
        </div>
      </div>
        
      <div className='page-wrapper'>
        <Houses />
      </div>
    </div>
  );
}

export default App;
