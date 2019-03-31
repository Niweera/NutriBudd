import React from 'react';

export default function ContactUs() {
  return (
    <section id="mu-contact">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mu-contact-area">
            <div className="mu-title">
              <span className="mu-subtitle">Get In Touch</span>
              <h2>Contact Us</h2><br/>            
              <span className="mu-title-bar"></span>
            </div>
            <div className="mu-contact-content">
              <div className="row">
                <div className="col-md-6">
                  <div className="mu-contact-left">
                    <form className="mu-contact-form">
                      <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Email"/>
                      </div>                      
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Message</label>                        
                        <textarea className="form-control" id="message" cols="30" rows="10" placeholder="Type Your Message"></textarea>
                      </div>                      
                      <button type="submit" className="mu-send-btn">Send Message</button>
                    </form>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mu-contact-right">
                    <div className="mu-contact-widget">
                      <h3>Office Address</h3>
                      <address>
                        <p><i className="fa fa-phone"></i> 0112 695 300</p>
                        <p><i className="fas fa-envelope"></i>dean@med.cmb.ac.lk, drmedfac@med.cmb.ac.lk</p>
                        <p><i className="fa fa-map-marker"></i>25 Kynsey Rd, Colombo 00800</p>
                      </address>
                    </div>
                    <div className="mu-contact-widget">
                      <h3>Open Hours</h3>                      
                      <address>
                        <p><span>Monday - Friday</span> 9.00 am to 12 pm</p>
                        <p><span>Saturday</span> 9.00 am to 10 pm</p>
                        <p><span>Sunday</span> 10.00 am to 12 pm</p>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
