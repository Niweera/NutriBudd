import React, { Component } from 'react';
import Slider from '../pages/Slider';
import ContactUs from '../pages/ContactUs';
import Counter from '../pages/Counter';
import Map from '../layout/Map';



class HomePage extends Component {
  render() {
    return (
      <div>
        <Slider/>
        <Counter/>
        <ContactUs/>
        <Map/>
      </div>
    )
  }
}

export default HomePage;
