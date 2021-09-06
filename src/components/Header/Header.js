import React, {useState} from 'react';
import './style.css';
import {ReactComponent as ElaraLogo} from '../../assets/elara.svg';
import {Link, useHistory} from "react-router-dom";
import HousesService from '../../services/Houses-service';

const service = new HousesService();

const Header = ({onChange}) => {

    const history = useHistory();
    
    const submitAction = () => {
        console.log('Submited!');
    }

    const setAddressInQuery = (event) => {
        let inputValue = event.target.value;
        const query = new URLSearchParams();
        query.set('address', inputValue);
        history.push(`/?${query}`);
        const address = query.get('address');
        console.log('address--------', address)
        service.getHouses({address});
    }

    return (
        <div className='header'>
            <div className='logo'>
                <Link to={'/'}><ElaraLogo /></Link>
            </div>

            <form onSubmit={submitAction}>
                <div className='header-input-container'>
                    <input type='text' onChange={setAddressInQuery} onFocus={setAddressInQuery} className='input' placeholder='Search by address'/>
                </div>
            </form>
            
        </div>
    )
} 

export default Header;