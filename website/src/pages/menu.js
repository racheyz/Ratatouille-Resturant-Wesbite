import React from 'react';
import DishCard from '../components/DishCard';
import "./menu.css";

const lightningy = {
    "name": "Lightningy Mushroom",
    "image": "https://cdn.vox-cdn.com/thumbor/vHLCXfMAC54bWxFOauSW3KefO5I=/0x0:1342x703/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22875715/mushroom_cooking.jpg",
    "description": "this is a mushroom dish",
}

const soup = {
    "name": "Chef's Soup of The Day",
    "image": "https://twocrumbsup.co/wp-content/uploads/2022/06/soup-gif-e1658912983830.gif",
    "description": "Chef Remy's soup of the day",
}


const board = {
    "name": "Emile's Tasting Platter",
    "image": "https://www.animationartconservation.com/images/176_2.jpg?crc=268502145",
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

const cheval = {
    "name": "Cheval Blanc",
    "image": "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2017/06/Chateau-Cheval-Blanc-1947.jpg",
    "description": "The classic Cheval Blanc 1947"
}

const latour = {
    "name": "Chateau Latour 1961",
    "image": "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2017/05/Chateau-Latour-1961.jpg",
    "description": "The classic Chateau Latour 1961"
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

const Drinks = () => {
    return (
        <div className='food-category'>
            <DishCard props={cheval} />
            <DishCard props={latour} />
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
            <h1>Drinks</h1>
            <Drinks />
        </div>
    );
}

export default Menu;