import React, {useState, useEffect} from 'react';
import HousesService from '../../services/Houses-service';

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

    return (
        <div>
            <h2>Hello from houses Details!</h2>
        </div>
    )
}

export default withRouter(HouseDetails);