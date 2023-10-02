import React from "react";

const Card = ({ card }) => {

    if (!card) return null;

    const {image, value, suit} = card;

    return (
        <div>
             <h3>{value} of {suit}</h3>
            <img src={image} alt='card-image' /> 
        </div>
    )
}

export default Card;