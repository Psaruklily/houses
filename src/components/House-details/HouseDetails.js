import React, {useState, useEffect, useRef} from 'react';
import HousesService from '../../services/Houses-service';
import {ReactComponent as Metric1} from '../../assets/metric1.svg';
import {ReactComponent as Metric2} from '../../assets/metric2.svg';
import {ReactComponent as Metric3} from '../../assets/metric3.svg';
import './style.css';

import {
    withRouter
  } from "react-router-dom";

const HouseDetails = (props) => {

    const [houseDetails, setHouseDetails] = useState({});
    const service = new HousesService();
    const {match:{params:{id}}} = props;

    useEffect(() => {
        service.getHouseDetails(id)
        .then(value => setHouseDetails(value));
    }, []);

    console.log('houseDetails', houseDetails);
    
    const span = document.querySelector('.test');
    const divEl = useRef(null);
   
    const showMore = () => {
        divEl.current.style.height = '100%';
        span.remove();
    }

    return (
        <div className='home-details-page'>
            <div className='home-details-content'>
                <div className='home-details-page_description'>

                    <div className='short-info'>
                        <h1 className='adress-title'>{houseDetails.address}, {houseDetails.ZIPcode}</h1>
                        <div className='home-metrics'>
                            <span><Metric1 className='metric-icon'/>{houseDetails.beds} beds</span>
                            <span><Metric2 className='metric-icon'/>{houseDetails.baths} baths</span>
                            <span><Metric3 className='metric-icon'/>{houseDetails.square} sq.ft.</span>
                        </div>

                        <div className='truncated-text'>
                            <div className='description' ref={divEl}>
                                {houseDetails.details?.houseDescription}
                            </div>
                        </div>
                        <span className='test'>
                            ...
                            <span role='button' className='read-more' onClick={showMore}>Read more</span>
                        </span>
                    </div>

                    <div className='per-month_wrapper'>
                        <div className='schedule-visit_container'>
                            <p>Test info</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default withRouter(HouseDetails);