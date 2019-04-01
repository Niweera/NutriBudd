import React, { Component } from 'react';
import Slider from '../pages/Slider';
import ContactUs from '../pages/ContactUs';
import Counter from '../pages/Counter';
import Map from '../layout/Map';
import Footer from '../layout/Footer';



class HomePage extends Component {
  render() {
    return (
      <div>
        <Slider/>
        <Counter/>
        <ContactUs/>
        <Map/>
        <Footer/>
      </div>
    )
  }
}

export default HomePage;
