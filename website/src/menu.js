import React from 'react';
import DishCard from './DishCard';
import "./menu.css";

const lightningy = {
    "name": "Lightningy Mushroom",
    "image": "https://2.bp.blogspot.com/-bQjyaTv9yIY/VOEWfUblMUI/AAAAAAAAKgs/iyRkrrgNJAc/s280/mushrooms%2Bcloseup.jpg",
    "description": "this is a mushroom dish",
}

const soup = {
    "name": "Chef's Soup of The Day",
    "image": "https://thestarvingchefblog.com/wp-content/uploads/2023/03/soup-from-ratatouille.jpg",
    "description": "Chef Remy's soup of the day",
}


const board = {
    "name": "Emile's Tasting Platter",
    "image": "https://static.wixstatic.com/media/bd6f00_402d6d93757345bda4581bdf0fbd74fe~mv2.jpg/v1/fill/w_980,h_661,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bd6f00_402d6d93757345bda4581bdf0fbd74fe~mv2.jpg",
    "description": "Fruit and Cheese Board",   
}

const ratatouille = {
    "name": "Remy's Ratatouille",
    "image": "https://www.fictionalfood.net/wp-content/uploads/2011/09/Ratatouille1-550x375.jpg",
    "description": "The infamous ratatouille dish",  
}

const omelette = {
    "name": "Egg omelette",
    "image": "https://cdn.vox-cdn.com/thumbor/_wgN_LSmFCFw08CD484eNlc7I94=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/22882779/Screen_Shot_2021_09_27_at_1.11.55_PM.png",
    "description": "filler",
}

const special = {
    "name": "Special Order",
    "image": "https://cdn.quizly.co/wp-content/uploads/2018/06/14164523/12d2.jpg",
    "description": "A personal linguini spin on sweetbreads ala Gusteau",
}

const Appetizers = () => {
    return (
        <div className='food-category'>
            <DishCard props={lightningy} />
            <DishCard props={soup} />
            <DishCard props={board} />
        </div>
    );
}

const Entrees = () => {
    return (
        <div className='food-category'>
            <DishCard props={ratatouille} />
            <DishCard props={omelette} />
            <DishCard props={special} />
        </div>

    )
}


const Menu = () => {
    return (
        <div className="menu">
            <h1>Appetizers</h1>
            <Appetizers />
            <h1>Entrees</h1>
            <Entrees />
        </div>
    );
}

export default Menu;