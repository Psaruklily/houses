import React, {useEffect, useState} from 'react';
import Houses from '../AllHouses/Houses';
import {ButtonFilter} from '../ButtonFilter';
import HousesService from '../../services/Houses-service';
import './style.css';
import Loader from '../Loader/LoaderComponent';
import {withRouter, useHistory} from "react-router-dom";

const Home = ({textFromInput}, props) => {

    const [allHouses, setAllHouses] = useState([]);
    const [filteredHouses, setFilteredHouses] = useState(allHouses);
    const [loader, setLoader] = useState(false);
    // const [query, setQuery] = useState(1);
    const history = useHistory()
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
        const value = document.getElementById('beds').value;
        query.set("beds", value);
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
                            <label for='beds'>Beds:</label>
                            <select name='beds' id='beds'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select><br/><br/>
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