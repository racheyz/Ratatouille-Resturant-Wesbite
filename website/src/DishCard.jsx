import React from 'react';

const DishCard = ({props}) => {
    return (
        <div className="menu-item-container">
            <div>
                <img src={props.image} alt={props.name}/>
            </div>

            <div>
                <h3>{props.name}</h3>
            </div>

            <div>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default DishCard;