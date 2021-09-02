import React from 'react';
import './style.css';

export const ButtonFilter = (props) => {

    const {text, onChildClick} = props;

    return (
        <div className='filter-button'>
            <div onClick={onChildClick} className='filter-button_button' role='button'>
                <span>{text}</span>
            </div>
        </div>
    )
}