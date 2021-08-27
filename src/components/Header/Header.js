import React from 'react';
import './style.css';
import {ReactComponent as ElaraLogo} from '../../assets/elara.svg';

export const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <ElaraLogo />
            </div>

            <div className='header-input-container'>
                <input type='text' className='input' placeholder='Search by address'/>
            </div>
        </div>
    )
} 