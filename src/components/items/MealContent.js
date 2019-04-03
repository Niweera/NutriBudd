import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import FixedFooter from '../layout/FixedFooter';
import first from '../imgs/first.jpg';
import Spinner from '../layout/Spinner';


class MealContent extends Component {

    render() {
        const { items } = this.props;
        if (items) {
            return(
              <div>
                <section id="mu-slider">
                  <div className="mu-slider-area"> 
                    <div className="mu-top-slider">
                      <div className="mu-top-slider-single">
                        <img src={first} alt="img"/>
                        <div className="mu-top-slider-content">
                          <h3 className="mb-4">Meal Content Page</h3>
                          {/* add code here | start*/}
                          
                          <div className="row">
                            <div className="col-md-2"></div>

                            <div id="specialDiv" className="col-md-8">
                              {items.map(item => (

                              <table key={item.id} className="table table-striped table-dark">
                                <thead className="thead-dark">
                                  <tr className="thead-light">
                                    <th scope="col" colSpan="2">{item.name}</th>
                                  </tr>
                                  <tr>
                                    <th scope="col">Ingredient</th>
                                    <th scope="col">Amount</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Calories</td>
                                    <td>{item.Calories}</td>
                                  </tr>
                                  <tr>
                                    <td>Sodium</td>
                                    <td>{item.Sodium}</td>
                                  </tr>
                                  <tr>
                                    <td>Sugar</td>
                                    <td>{item.Sugar}</td>
                                  </tr>
                                </tbody>
                              </table>

                              ))}

                            </div>

                            <div className="col-md-2"></div>
                          </div>

                          {/* add code here | end*/}

                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <FixedFooter/>
              </div>
            )
        } else {
            return <Spinner />;
        }
    }

}

MealContent.propTypes = {
    firestore: PropTypes.object.isRequired,
    items: PropTypes.array
};

export default compose(
    firestoreConnect([{ collection: 'Beverages' }]),
    connect((state, props) => ({
        items: state.firestore.ordered.Beverages
    }))
)(MealContent);
