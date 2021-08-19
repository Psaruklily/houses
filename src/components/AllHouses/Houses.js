import React from 'react';
import allHouses from '../../data-houses';
import {OneHouse} from '../../components/OneHouse';
import './style.css';

export const Houses = () => {
    return(
        <div className='main-container'>
            {allHouses.map(house => (
                <OneHouse house={house} key={house._id}/>
            ))}
        </div>
    )
}



