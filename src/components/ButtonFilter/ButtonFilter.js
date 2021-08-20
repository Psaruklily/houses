import React from 'react';
import './style.css';

export const ButtonFilter = (props) => {

    const {text} = props;

    return (
        <div className='filter-button'>
            <div className='filter-button_button' role='button'>
                <span>{text}</span>
            </div>
        </div>
    )
}