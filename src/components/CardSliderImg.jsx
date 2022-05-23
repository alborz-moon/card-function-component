import React from 'react';

function CardSliderImg({type,address}) {
    return ( 
        <div className="book-img">
            <img src={address} alt="" className={type}/>
        </div>
     );
}

export default CardSliderImg;