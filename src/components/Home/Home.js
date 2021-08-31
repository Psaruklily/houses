import React, {useEffect, useState} from 'react';
import Houses from '../AllHouses/Houses';
import {ButtonFilter} from '../ButtonFilter';
import HousesService from '../../services/Houses-service';
import './style.css';
import Loader from '../Loader/LoaderComponent';
import {withRouter} from "react-router-dom";

const Home = ({textFromInput}) => {

    const [allHouses, setAllHouses] = useState([]);
    const [filteredHouses, setFilteredHouses] = useState(allHouses);
    const [loader, setLoader] = useState(false);
    const service = new HousesService();
    
    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            service.getHouses()
            .then(value => {
                setAllHouses(value);
                setFilteredHouses(value);
                setLoader(false);
            });
        }, 1000)
    },[]);

    useEffect(() => {
        let result = [];
        result = allHouses.filter(house => {
            return house.address.toLowerCase().search(textFromInput) !== -1;
        });
        setFilteredHouses(result);
    }, [textFromInput])

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
                    {filteredHouses.length === 0 && <p className='not-available'>0 home available</p>}
                    {loader && <Loader />}
                    <Houses houses={filteredHouses}/>
                </div>`
            </div>       
        </div>
    )
}

export default withRouter(Home);