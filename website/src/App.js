import './App.css';
import React from 'react';
import Menu from './pages/menu';
import Home from './pages/home';
import { Route, Routes, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


window.onscroll = function() {ScrollFunction()};

function ScrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      const logo = document.getElementById("resturant-logo");
      logo.style.width = "70px";
      logo.style.height = "70px";
      const logoText = document.getElementById("resturant-name-text");
      logoText.style.fontSize = "60px"
      const pages = document.getElementById("nav-bar-pages");
      pages.style.fontSize = "15px";
  } else {
    const logo = document.getElementById("resturant-logo");
    logo.style.width = "90px";
    logo.style.height = "90px";
    const logoText = document.getElementById("resturant-name-text");
    logoText.style.fontSize = "80px"
    const pages = document.getElementById("nav-bar-pages");
    pages.style.fontSize = "20px";
  }
}


const Header = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <h2 id="resturant-name-text">La Ratatouille</h2>
        <img id="resturant-logo" src='https://svgshare.com/i/rTE.svg' title='Ratatouille logo' />
      </div>

      <ul id="nav-bar-pages">
        <li>
          <Link className="active" to="/">Discover</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <HashLink smooth to="/#staff-panel">Our Team</HashLink>
        </li>
        <li>
          <HashLink smooth to="/#location-panel">Locations</HashLink>
        </li>
      </ul>
    </nav>        
  );
}



const App = () => {
  return (
    <>
      <div className="header"> 
        <Header />
      </div>

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
