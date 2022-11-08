import React from 'react';
import tarotCup from './imgs/tarotCup.png';
import tarotMoon from './imgs/tarotMoon.png';
import tarotSun from './imgs/tarotSun.png';
import tarotOutline from './imgs/tarotOutline.png';


function Card({timeTitle, border, iconList, backText}) {
 
    return(
        <>

        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img className="tarot-border" src={border} />
                    <img className="tarot-logo" src={iconList} />
                    <h1 className="card-title">{timeTitle}</h1>
                </div>
                <div className="flip-card-back">
                    <img className="tarot-border" src={border} />
                    <p id="card-back-text">{backText}</p>
                </div>
            </div>
        </div>

        </>
    )

}

export default Card;
