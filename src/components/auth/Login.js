import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { notifyUser } from '../../actions/notifyActions';
import Alert from '../layout/Alert';
import FixedFooter from '../layout/FixedFooter';
import first from '../imgs/first.jpg';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  onSubmit = e => {
    e.preventDefault();

    const { firebase, notifyUser } = this.props;
    const { email, password } = this.state;

    firebase
      .login({
        email,
        password
      })
      .then(success => notifyUser('Success', 'success'),err => notifyUser('Invalid Login Credentials', 'error'));
      // catch(err => notifyUser('Invalid Login Credentials', 'error')).
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { message, messageType } = this.props.notify;
    return (
      <div>
        <section id="mu-slider">
          <div className="mu-slider-area"> 
            <div className="mu-top-slider">
              <div className="mu-top-slider-single">
                <img src={first} alt="img"/>
                <div className="mu-top-slider-content">
                <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              {message && messageType==='error' ? (
                <Alert message={message} messageType={messageType}/>
              ): null}
              <div className="card" style={{backgroundColor: 'rgba(0,0,0,0.5)', textSshadow: '0 1px 3px rgba(0,0,0,.5)', color: 'white'}}>
                <div className="card-header text-center" style={{backgroundColor: 'rgba(0,0,0,0.5)', textShadow: '0 1px 3px rgba(0,0,0,.5)', color: 'white'}}><i className="fas fa-lock"></i> Login</div>

                <div className="card-body">
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group ">
                      <label htmlFor="email" className="col-md-12 col-form-label text-md-center">E-Mail Address</label>
                      <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                          <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.onChange} required autoFocus/>
                        </div>
                        <div className="col-md-2"></div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="password" className="col-md-12 col-form-label text-md-center">Password</label>
                      <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                          <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onChange} required/>
                        </div>
                        <div className="col-md-2"></div>
                      </div>
                    </div>

                    <div className="form-group row mb-0">
                      <div className="col-md-4"></div>
                      <div className="col-md-4">
                            <button type="submit" className="mu-send-btn btn-block text-center" style={{cursor: 'pointer', color:'white'}}>
                              Login
                            </button>
                        </div>
                      <div className="col-md-4"></div>
                    </div>
                  </form>
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
        <FixedFooter/>
      </div>
    );
  }
}

Login.propTypes = {
  firebase: PropTypes.object.isRequired,
  notify: PropTypes.object.isRequired,
  notifyUser: PropTypes.func.isRequired
};

export default compose(
  firebaseConnect(),
  connect(
    (state, props) => ({
      notify: state.notify
    }),
    { notifyUser }
  )
)(Login);

// export default firebaseConnect()(Login);
