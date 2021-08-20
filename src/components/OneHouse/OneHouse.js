import React from 'react';
import './style.css';

export const OneHouse = (props) => {
    console.log(props);
    const {house} = props;
    return(
            <div className='size-div'>
            <div>
                <img src={`${house.urlHouse}`} className='img' alt='house' />
            </div>
            <div className='info'>

                <div className='align'>
                    <div className='align-first-line'>
                        <div><span className='price'>{house.price}</span> <span className='address'>/mo</span></div>
                        <div className='align-first-line'>
                            <span className='font-bad-square'>{house.beds} beds</span>
                            <span className='font-bad-square'>{house.baths} baths</span>
                            <span className='font-bad-square'>{house.square} sq.ft</span>
                        </div>
                    </div>

                    <div className='margin-adress'>
                        <span className='address'>{house.address}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}