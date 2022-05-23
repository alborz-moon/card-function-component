import React from 'react';

function CardSliderChild({type,child}) {
    return ( 
        <>
            <div className={type}>{child}</div>
        </>
     );
}

export default CardSliderChild;