import React, { Component } from "react";
import { Link } from "react-router-dom";
import FixedFooter from "../layout/FixedFooter";

class Ingredients extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container">
          <h1 style={{textAlign:"center",marginTop:"10px", marginBottom:"42px", fontSize:"45px"}}>What would you like to do?</h1>
          <div className="row mb-4">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <Link style={{backgroundColor:'#d89b02',height:"80px",fontSize:"38px"}} className="btn btn-block" to="/mealcontent">
                    View Meal Content
              </Link>
              </div>
            <div className="col-md-4"></div>
          </div>

          <div className="row mb-4">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <Link style={{backgroundColor:'#d89b02',height:"80px",fontSize:"38px"}} className="btn btn-block" to="/searchingredients">
                    Search Ingredients
              </Link>
              </div>
            <div className="col-md-4"></div>
          </div>

          <div className="row mb-4">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <Link style={{backgroundColor:'#d89b02',height:"80px",fontSize:"38px"}} className="btn btn-block" to="/calculatecalories">
                    Calculate Calories
              </Link>
              </div>
            <div className="col-md-4"></div>
          </div>
        </div>
        <FixedFooter/>
      </div>
    );
  }
}

export default Ingredients;
// Always use captial letters for creating an class ie: use Ingredients instead of ingredients
// save files as *.js | not as *.jsx
