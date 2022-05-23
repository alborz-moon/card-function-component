import React from 'react';

function CardSliderRate({star5,star4,star3,star2,star1}) {
    return ( 
        <>
            <div className="rate">
                <fieldset className="rating">
                    <input type="checkbox" id={star5} name="rating" value="5" />
                    <label className="full" htmlFor={star5}></label>
                    <input type="checkbox" id={star4} name="rating" value="4" />
                    <label className="full" htmlFor={star4}></label>
                    <input type="checkbox" id={star3} name="rating" value="3" />
                    <label className="full" htmlFor={star3}></label>
                    <input type="checkbox" id={star2} name="rating" value="2" />
                    <label className="full" htmlFor={star2}></label>
                    <input type="checkbox" id={star1} name="rating" value="1" />
                    <label className="full" htmlFor={star1}></label>
                </fieldset>
                <span className="book-voters">1.987 voters</span>
            </div>
        </>
     );
}

export default CardSliderRate;
