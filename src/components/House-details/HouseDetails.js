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
                            <div className='schedule-amount'><span className='price-for-house'>{houseDetails.price} </span><span className='per-mo'>per month</span></div>
                            <div className='schedule-button'>
                                <span>Schedule a visit</span>
                            </div>
                        </div>
                    </div>

                </div>
                <hr className='line1' />

                <h2 className='house-details-title'>Home details</h2>

                <div className='home-info'>
                    <div className='home-info_table'>
                        <tr>
                            <td>Type</td>
                            <td>{houseDetails?.details?.homeDetails?.Type}</td>
                        </tr>
                        <tr>
                            <td>Cooling</td>
                            <td>{houseDetails?.details?.homeDetails?.Cooling}</td>
                        </tr>
                        <tr>
                            <td>Heating</td>
                            <td>{houseDetails?.details?.homeDetails?.Heating}</td>
                        </tr>
                        <tr>
                            <td>Built</td>
                            <td>{houseDetails?.details?.homeDetails?.Built}</td>
                        </tr>
                        <tr>
                            <td>New Construction</td>
                            <td>{houseDetails?.details?.homeDetails?.NewConstruction}</td>
                        </tr>
                        <tr>
                            <td>Floor</td>
                            <td>{houseDetails?.details?.homeDetails?.Floor}</td>
                        </tr>
                        <tr>
                            <td>Other</td>
                            <td>{houseDetails?.details?.homeDetails?.Other}</td>
                        </tr>
                        <tr>
                            <td>For Sale Price</td>
                            <td>{houseDetails?.details?.homeDetails?.ForSalePrice}</td>
                        </tr>
                        <tr>
                            <td>Land Size</td>
                            <td>{houseDetails?.details?.homeDetails?.LandSize}</td>
                        </tr>
                    </div>
                    <hr className='line1'/>

                    <h2 className='house-details-title'>This home comes with</h2>

                </div>

            </div>
        </div>
    )
}

export default withRouter(HouseDetails);