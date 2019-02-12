import React from 'react'

export default function Counter() {
  return (
    <section id="mu-counter">
        <div className="mu-counter-overlay">
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="mu-counter-area">
                <ul className="mu-counter-nav">
                <li className="col-md-3 col-sm-3 col-xs-12">
                    <div className="mu-single-counter">
                    <span>Fresh</span>
                    <h3><span className="counter">100</span><sup>+</sup></h3>
                    <p>Breakfast Items</p>
                    </div>
                </li>
                <li className="col-md-3 col-sm-3 col-xs-12">
                    <div className="mu-single-counter">
                    <span>Delicious</span>
                    <h3><span className="counter">130</span><sup>+</sup></h3>
                    <p>Lunch Items</p>
                    </div>
                </li>
                <li className="col-md-3 col-sm-3 col-xs-12">
                    <div className="mu-single-counter">
                    <span>Tasty</span>
                    <h3><span className="counter">315</span><sup>+</sup></h3>
                    <p>Bevarage Items</p>
                    </div>
                </li>
                <li className="col-md-3 col-sm-3 col-xs-12">
                    <div className="mu-single-counter">
                    <span>Satisfied</span>
                    <h3><span className="counter">350</span><sup>+</sup></h3>
                    <p>Users</p>
                    </div>
                </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}
