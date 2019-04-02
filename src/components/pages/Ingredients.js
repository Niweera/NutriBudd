import React, { Component } from "react";
import { Link } from "react-router-dom";
import FixedFooter from "../layout/FixedFooter";
import first from '../imgs/first.jpg';

class Ingredients extends Component {
  state = {};
  render() {
    return (
      <div>
        <section id="mu-slider">
          <div className="mu-slider-area"> 
            <div className="mu-top-slider">
              <div className="mu-top-slider-single">
                <img src={first} alt="img"/>
                <div className="mu-top-slider-content">
                    <span className="mu-slider-small-title">Welcome</span>
                    <h2 className="mu-slider-title">to NutriBuddy</h2>
                    <h3 className="mb-4">What would you like to do?</h3>
                    <div className="row">
                      <div className="col-md-4">
                        <Link style={linkStyle} className="mu-send-btn btn-block text-center" to="/mealcontent">
                          View Meal Content
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <Link style={linkStyle} className="mu-send-btn btn-block text-center" to="/searchingredients">
                          Search Ingredients
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <Link style={linkStyle} className="mu-send-btn btn-block text-center" to="/calculatecalories">
                          Calculate Calories
                        </Link>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FixedFooter/>
      </div>
    );
  }
}

export default Ingredients;
// Always use captial letters for creating an class ie: use Ingredients instead of ingredients
// save files as *.js | not as *.jsx
const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '38px'
}