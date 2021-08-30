import React, {useState, useEffect, useRef} from 'react';
import HousesService from '../../services/Houses-service';
import {ReactComponent as Metric1} from '../../assets/metric1.svg';
import {ReactComponent as Metric2} from '../../assets/metric2.svg';
import {ReactComponent as Metric3} from '../../assets/metric3.svg';
import {ReactComponent as Done} from '../../assets/done.svg';
import {ReactComponent as SchoolNearby1} from '../../assets/schoolNearby1.svg';
import {ReactComponent as SchoolNearby2} from '../../assets/schoolNearby2.svg';
import {ReactComponent as SchoolNearby3} from '../../assets/schoolNearby3.svg';
import './style.css';
import {withRouter} from 'react-router-dom';
import Loader from '../Loader/LoaderComponent'; 

const HouseDetails = (props) => {

    const [houseDetails, setHouseDetails] = useState({});
    const [loader, setLoader] = useState(false);

    const service = new HousesService();
    const {match:{params:{id}}} = props;

    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            service.getHouseDetails(id)
            .then(value => setHouseDetails(value));
            setLoader(false);
        }, 1000)
    }, []);

    console.log('houseDetails', houseDetails);
    
    const span = document.querySelector('.test');
    const divEl = useRef(null);
   
    const showMore = () => {
        divEl.current.style.height = '100%';
        span.remove();
    }

    const homeComes = houseDetails?.details?.homeComes;

    return (
        <div>
            {loader && <Loader />}
            <div className='home-details-page'>
            <div className='home-details-content'>
                <div className='home-details-page_description'>

                    <div className='short-info'>
                        <h1 className='adress-title'>{houseDetails.address}, {houseDetails.ZIPcode}</h1>
                        <div className='home-metrics'>
                            <span><Metric1 className='pos-icon'/>{houseDetails.beds} beds</span>
                            <span><Metric2 className='pos-icon'/>{houseDetails.baths} baths</span>
                            <span><Metric3 className='pos-icon'/>{houseDetails.square} sq.ft.</span>
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
                        <table>
                            <tbody>
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
                            </tbody>
                        </table>
                        
                    </div>
                    <hr className='line1'/>

                    <h2 className='house-details-title'>This home comes with</h2>
                    <div className='done-block'>
                        {homeComes?.map((elem, index) => <div key={index}><Done /><span className='list-item'>{elem}</span></div>)}
                    </div>
                    <hr className='line1'/>

                    <div className='schoolsNearby'>
                        <h2>Schools nearby</h2>
                        <div className='schoolsNearby_schools'>
                            <div className='schoolNearby_school'>
                                <div className='schoolNearby_school_type'><SchoolNearby1 className='pos-icon'/><span>High school</span></div>
                                <hr className='line'/>
                                <div className='schoolNearby_school_name'>Unspecified</div>
                            </div>
                            <div className='schoolNearby_school'>
                                <div className='schoolNearby_school_type'><SchoolNearby2 className='pos-icon'/><span>Middle school</span></div>
                                <hr className='line'/>
                                <div className='schoolNearby_school_name'>Unspecified</div>
                            </div>
                            <div className='schoolNearby_school'>
                                <div className='schoolNearby_school_type'><SchoolNearby3 className='pos-icon'/><span>Elementary school</span></div>
                                <hr className='line'/>
                                <div className='schoolNearby_school_name'>Unspecified</div>
                            </div>
                        </div>
                        <hr className='line1'/>

                        <div className='home-details-page_contacts'>
                            <p>
                                <span>Interested in this house?</span>&nbsp;
                                <span className='home-details-page_contacts_schedule_visit' role='button'>Schedule a visit now</span>
                            </p>
                            <p>
                                <span>Or contact us at</span>&nbsp;
                                <a href='#' className='home-details-page_contacts_schedule_visit'>support@elara.one</a>&nbsp;
                                <span>if you have any questions.</span>
                            </p>
                        </div>

                    </div>
                </div>

            </div>

            <footer className='footer'>
                <div>
                    <p>© ElaraOne - 2021. All Rights Inclusive</p>
                    <p>All property listing information is reproduced from the RealTracs and the MLS system, which reserves all copyrights and rights thereto. All listings have been selected by Picket, through its association with Omni Realtors & Property Management.</p>
                </div>
            </footer>
            
        </div>
        </div>
    )
}

export default withRouter(HouseDetails);