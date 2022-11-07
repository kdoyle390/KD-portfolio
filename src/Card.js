import React from 'react';

function Card({timeTitle, iconList}) {
 
    return(
        <>

        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <p className="fa-icon-styling">
                        {iconList}
                    </p>
                    <img src="./imgs/tarotCup.png" />
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
