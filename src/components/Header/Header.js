import React from 'react';
import './style.css';
import {ReactComponent as ElaraLogo} from '../../assets/elara.svg';
import {Link} from "react-router-dom";

const Header = ({onChange}) => {

    return (
        <div className='header'>
            <div className='logo'>
                <Link to={'/'}><ElaraLogo /></Link>
            </div>

            <div className='header-input-container'>
                <input type='text' onChange={event => onChange(event)} className='input' placeholder='Search by address'/>
            </div>
        </div>
    )
} 

export default Header;