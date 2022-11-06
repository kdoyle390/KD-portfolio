import React from 'react';
import { useState } from 'react';

function Card({timeTitle, iconList}) {

    const [flip, setFlip] = useState(true);
    


    return(
        <>

        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <p className="fa-icon-styling">
                        {iconList}
                    </p>
                    <h1 className="card-title">{timeTitle}</h1>
                </div>
                <div className="flip-card-back">
                    <p>back of card content</p>
                </div>
            </div>
        </div>

        </>
    )

}

export default Card;
// config style then refactor
// Can I move an id up to the App level to change shadow properties for each card?