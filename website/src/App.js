import './App.css';
import React from 'react';
import Menu from './menu';
import DishCard from './DishCard.jsx';



const Header = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar-pages">
        <li className="discover-text">Discover</li>
        <li className="menu-text">Menu</li>
        <li className="locations-text">Locations</li>
        <li className="our-team-text">Our Team</li>
      </ul>

      <div className="logo">
        <h2 className="resturant-name-text">La Ratatouille</h2>
        <img className="resturant-logo" src='https://svgshare.com/i/rTE.svg' title='Ratatouille logo' />
      </div>
    </nav>        
  );
}


const App = () => {
  return (
    <div className="App">
      <Header />
      <Menu />
      
    </div>
  );
}

export default App;
