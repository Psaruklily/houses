import React from 'react';
import {OneHouse} from '../../components/OneHouse';
import './style.css';
import {Link, withRouter} from "react-router-dom";

 const Houses = (props) => {
    const {houses, match:{url}} = props;
    
    return(
        <div className='main-container'>
            {houses.map(house => (
                <Link to={url + 'houses/' + house._id} key={house._id} className='text-decor'><OneHouse house={house}/></Link>
            ))}
        </div>
    )
}

export default withRouter(Houses);



