import React from 'react';
import "./home.css";
import ScrollBar from '../components/ScrollBar';
import LocationPin from "../images/location.png";
import Clock from "../images/clock.png";

const Home = () => {
    return (
        <>
            <div className="cover">
                <img className="cover-photo"src="https://wallpapercave.com/wp/oKqwDvS.jpg"/>
            </div>
            <h1>Our Story</h1>
            <div className='first-panel'>
                <img className="photo1" src="https://img.buzzfeed.com/buzzfeed-static/static/2017-10/23/18/asset/buzzfeed-prod-fastlane-02/sub-buzz-4537-1508797090-7.jpg?resize=990:414"/>
                <p>it all started with a dream...</p>
            </div>
            <div id="staff-panel">
                <h1>Our Team</h1>
                <ScrollBar />
            </div>
            <div id="location-panel">
                <h1>Location</h1>
                <div className="location-board">
                    <div className="address">
                        <img src={LocationPin}></img>
                        <h2>Address</h2>
                        <p>19 Quai de la Tournelle,</p>
                        <p>75005 Paris, France</p>

                    </div>
                    <div className="hours">
                        <img src={Clock}></img>
                        <h2>Hours</h2>
                        <p>Monday to Sunday</p>
                        <p>9:00am to 10:00pm</p>
                    </div>
                </div>
            </div>
            <footer className='footer'>
                <p>This is the footer</p>
            </footer>
            

        </>
    );
}

export default Home;