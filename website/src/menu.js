import React from 'react';
import DishCard from './DishCard';

const lightningy = {
    "name": "Lightningy Mushroom",
    "image": "images/lightningy.jpg",
    "description": "this is a mushroom puff dish",
}


const Menu = () => {
    return (
        <div className="menu">
            <DishCard food={lightningy}/>
        </div>
    );
}

export default Menu;