import React, {useEffect, useState} from 'react';
import Houses from '../AllHouses/Houses';
import {ButtonFilter} from '../ButtonFilter';
import HousesService from '../../services/Houses-service';
import './style.css';
import * as ReactBootStrap from 'react-bootstrap';

import {
    withRouter
  } from "react-router-dom";

const Home = () => {

    const [houses, setHouses] = useState([]);
    const [loader, setLoader] = useState(false);
    const service = new HousesService();
    
    useEffect(() => {
        setLoader(true);
        service.getHouses()
        .then(value => {
            setHouses(value)
            setLoader(false);
        });
        
    },[]);

    return (
        <div>
          
            <div className='wrapper-for-homeContent'>
`               <div className='homesPageDesktop_filter'>
                    <div className='filter-buttons'>
                        <ButtonFilter text={'Beds and baths'}/>
                        <ButtonFilter text={'Price'}/>
                        <ButtonFilter text={'More filters'}/>
                    </div>
                </div>
        
                <div className='page-wrapper'>

                {/* <Houses houses={houses}/> */}
                    {!loader ? <Houses houses={houses}/> : <ReactBootStrap.Spinner animation="border" />}
                    
                </div>`
            </div>
           
        </div>
    )
}

export default withRouter(Home);