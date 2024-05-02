import React from "react";
import Colette from "../images/colette.png"
import Remy from "../images/remy.png"
import Emile from "../images/emile.png"
import Left from "../images/leftarrow.svg"
import Right from "../images/rightarrow.svg"

import "./scrollbar.css"

const ScrollBar = () => {
    return (
        <>
            <div className="cover">
                <div className="scroll-images">
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front">
                                <img className="character-photo" src={Remy} alt="remy" />
                            </div>                            
                            <div className="card-back">
                                <h3>Remy</h3>
                                <p>Head Chef</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front">
                                <img className="character-photo" src="https://i.pinimg.com/474x/eb/bf/28/ebbf28303696dd50ccc1a9738bd90556.jpg" alt="linguini" />
                            </div>                            
                            <div className="card-back">
                                <h3>Linguini</h3>
                                <p>Sous Chef/Waitress</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front">
                                <img className="character-photo" src={Colette} alt="colette" />
                            </div>                            
                            <div className="card-back">
                                <h3>Colette</h3>
                                <p>Sous Chef</p>
                            </div>
                        </div>                        
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front">
                                <img className="character-photo" src={Emile} alt="emile" />
                            </div>                            
                            <div className="card-back">
                                <h3>Emile</h3>
                                <p>Taster</p>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>


        </>
    )
}

export default ScrollBar;