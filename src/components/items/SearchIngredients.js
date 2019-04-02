import React from 'react'
import FixedFooter from '../layout/FixedFooter';
import first from '../imgs/first.jpg';

export default function SearchIngredients() {
  return (
    <div>
      <section id="mu-slider">
        <div className="mu-slider-area"> 
          <div className="mu-top-slider">
            <div className="mu-top-slider-single">
              <img src={first} alt="img"/>
              <div className="mu-top-slider-content">
                  <h3 className="mb-4">Search Ingredients Page</h3>
                  {/* add code here */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <FixedFooter/>
    </div>
  )
}
