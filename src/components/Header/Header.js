import React from 'react';
import './style.css';

export const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <a href='#' className='header-logo'>
                    <span>elara</span>
                </a>
            </div>

            <div className='header-input-container'>
                <input type='text' className='input' placeholder='Search by address'/>
            </div>
        </div>
    )
} 