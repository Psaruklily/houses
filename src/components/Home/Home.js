import React, {useEffect, useState} from 'react';
import Houses from '../AllHouses/Houses';
import {ButtonFilter} from '../ButtonFilter';
import HousesService from '../../services/Houses-service';
import './style.css';
import Loader from '../Loader/LoaderComponent';
import {withRouter} from "react-router-dom";

const Home = () => {

    const [houses, setHouses] = useState([]);
    const [loader, setLoader] = useState(false);
    const service = new HousesService();
    
    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            service.getHouses()
            .then(value => {
                setHouses(value)
                setLoader(false);
            });
        }, 1000)
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
                    {loader && <Loader />}
                    <Houses houses={houses}/>
                </div>`
            </div>       
        </div>
    )
}

export default withRouter(Home);