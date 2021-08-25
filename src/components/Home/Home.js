import React, {useEffect, useState} from 'react';
import Houses from '../AllHouses/Houses';
import {ButtonFilter} from '../ButtonFilter';
import HousesService from '../../services/Houses-service';
import './style.css';

import {
    withRouter
  } from "react-router-dom";

const Home = () => {

    const [houses, setHouses] = useState([]);
    const service = new HousesService();
    
    useEffect(() => {
    service.getHouses()
        .then(value => setHouses(value));
    },[]);

    return (
        <div>
            <div className='homesPageDesktop_filter'>
                <div className='filter-buttons'>
                    <ButtonFilter text={'Beds and baths'}/>
                    <ButtonFilter text={'Price'}/>
                    <ButtonFilter text={'More filters'}/>
                </div>
            </div>
        
            <div className='page-wrapper'>
                <Houses houses={houses}/>
            </div>
        </div>
    )
}

export default withRouter(Home);