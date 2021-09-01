import React, {useEffect, useState} from 'react';
import Houses from '../AllHouses/Houses';
import {ButtonFilter} from '../ButtonFilter';
import HousesService from '../../services/Houses-service';
import './style.css';
import Loader from '../Loader/LoaderComponent';
import {withRouter, useHistory} from "react-router-dom";
import Select from '../Select/Select';

const Home = ({textFromInput}, props) => {

    const [allHouses, setAllHouses] = useState([]);
    const [filteredHouses, setFilteredHouses] = useState(allHouses);
    const [loader, setLoader] = useState(false);
    const history = useHistory();
    const [beds, setBeds] = useState(null); 
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
    }, [textFromInput]);

    const saveBeds = () => {
        const query = new URLSearchParams();
        query.set('beds', beds);
        history.push(`/houses/?${query}`);
    }

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

                    <div className='filter-dropdown-menu'>
                        <div className='filter-dropdown-menu_filters'>

                            <div className='filter-dropdown-menu_filters_wrapper-child-cont'>
                                <div className='filter-dropdown-menu_filters_label'>Beds</div>
                                    <Select selectBeds={beds} setSelectedBeds={setBeds}/>
                            </div>

                            <input type="submit" value="Save" onClick={saveBeds}></input>
                        </div>
                        <div className='filter-dropdown-menu_buttons'></div>
                    </div>

                    {filteredHouses.length === 0 && <p className='not-available'>0 home available</p>}
                    {loader && <Loader />}
                    <Houses houses={filteredHouses}/>
                </div>`
            </div>       
        </div>
    )
}

export default withRouter(Home);