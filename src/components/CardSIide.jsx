import React,{useState,useEffect} from 'react';
import CardSliderImg from './CardSliderImg';
import CardSliderChild from './CardSliderChild';
import CardSliderRate from './CardSliderRate';

function CardSlider() {
    // const [bigmagic,setBigmagic] = useState([]);
    
    // useEffect(() => {
    //     fetch = ("http://localhost:3001/big-magic").then(response => response.json()).then(bigmagic => setBigmagic(bigmagic))
    // });
    return ( 
        <>
            <div className="book-cell">

                <CardSliderImg type='book-photo' address="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg"/>

                <div className="book-content">
                    <div className="book-title"></div>
                    <CardSliderChild type="book-title" child="BIG MAGIC"/>
                    <CardSliderChild type="book-author" child="by Elizabeth Gilbert"/>
                    <CardSliderRate star5="star5" star4="star4" star3="star3" star2="star2" star1="star1"/>
                    <CardSliderChild type="book-sum" child="Readers of all ages and walks of life have drawn inspiration and
                        empowerment from Elizabeth Gilbert’s books htmlFor years. "/>
                </div>
            </div>
        </>
     );
}

export default CardSlider;