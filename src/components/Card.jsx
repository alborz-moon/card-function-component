import React from 'react';
import CardSlider from './CardSIide';


function Card() {
    return ( 
        <>
            <div className="book-store">   
                <div className="book-slide">
                    <div className="book js-flickity">
                        
                        <CardSlider />

                    </div>
                </div>
            </div>
        </>
     );
}

export default Card;