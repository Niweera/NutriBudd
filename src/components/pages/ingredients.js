import React, { Component } from "react";
import { Link } from "react-router-dom";

class Ingredients extends Component {
  state = {};
  render() {
    return (
      <div className="container" style={{marginBottom:"356px"}}>
        <h1 style={{textAlign:"center",marginTop:"10px", marginBottom:"42px"}}>What would you like to do?</h1>
        <div className="row mb-4">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Link style={{backgroundColor:'#d89b02',height:"80px",fontSize:"38px"}} className="btn btn-block" to="/">
                  View Meal Content
            </Link>
            </div>
          <div className="col-md-4"></div>
        </div>

        <div className="row mb-4">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Link style={{backgroundColor:'#d89b02',height:"80px",fontSize:"38px"}} className="btn btn-block" to="/">
                  Search Ingredients
            </Link>
            </div>
          <div className="col-md-4"></div>
        </div>

        <div className="row mb-4">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Link style={{backgroundColor:'#d89b02',height:"80px",fontSize:"38px"}} className="btn btn-block" to="/">
                  Calculate Calories
            </Link>
            </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default Ingredients;
// Always use captial letters for creating an class ie: use Ingredients instead of ingredients
// save files as *.js | not as *.jsx
