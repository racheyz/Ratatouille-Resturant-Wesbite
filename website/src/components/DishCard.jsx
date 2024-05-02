import React from 'react';
import "../pages/menu.css";

const DishCard = ({props}) => {
    return (
        <div className="menu-item-container">
            <div>
                <img src={props.image} alt={props.name} width = "280" height = "230"/>
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