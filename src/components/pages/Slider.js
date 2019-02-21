import React from 'react';
import first from '../imgs/first.jpg';
import second from '../imgs/second.jpg';
import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <section id="mu-slider">
        <div className="mu-slider-area"> 

        <div className="mu-top-slider">

            <div className="mu-top-slider-single">
            <img src={first} alt="img"/>

            <div className="mu-top-slider-content">
                <span className="mu-slider-small-title">Welcome</span>
                <h2 className="mu-slider-title">To The NutriBuddy</h2>
                <h3>“To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.” </h3>
                <Link style={linkStyle} className="mu-send-btn" to="/ingredients">
                    Let's Go
                </Link>
            </div>

            </div>


            <div className="mu-top-slider-single">
            <img src={second} alt="img"/>

            <div className="mu-top-slider-content">
                <span className="mu-slider-small-title">NutriBuddy</span>
                <h2 className="mu-slider-title">Measure your calorie intake</h2>
                <h3>"If you don't take care of your body, where are you going to live?" </h3>           
            </div>

            </div>  
        </div>
        </div>
    </section>
  )
}

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '38px',
  display: 'inline-block'
}
