import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";

class Header extends Component {
  state = {
    isAuthenticated: false
  };

  onClickLogout = e => {
    e.preventDefault();

    const { firebase } = this.props;
    firebase.logout();
  };

  static getDerivedStateFromProps(props, state) {
    const { auth } = props;

    if (auth.uid) {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <nav className="navbar navbar-expand-md navbar-dark" style={navbarStyle}>
        <div className="container">
          <Link style={headerStyle} className="navbar-brand" to="/">
            NutriBuddy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link style={headingStyle} className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {isAuthenticated ? (
                <li className="nav-item">
                  <Link
                    style={headingStyle}
                    className="nav-link"
                    to="/Dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
              ) : null}
            </ul>

            <ul className="navbar-nav ml-auto">
              {isAuthenticated ? (
                <li className="nav-item dropdown">
                  <button
                    className="nav-link dropdown-toggle"
                    style={loginStyle}
                    id="navbarDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Administrator
                  </button>
                  <div
                    className="dropdown-menu"
                    style={{ backgroundColor: "#deba5f", color: "black" }}
                    aria-labelledby="navbarDropdown"
                  >
                    <a
                      className="dropdown-item "
                      style={{ fontSize: "20px", color: "black" }}
                      href="#!"
                      onClick={this.onClickLogout}
                    >
                      Logout
                    </a>
                  </div>
                </li>
              ) : (
                <li className="nav-item">
                  <Link style={headingStyle} className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const navbarStyle = {
  backgroundColor: "#deba5f",
  textShadow: "0 1px 3px rgba(0,0,0,.5)",
  color: "black"
};

const loginStyle = {
  backgroundColor: "#deba5f",
  textShadow: "0 1px 3px rgba(0,0,0,.5)",
  color: "black",
  cursor: "pointer",
  border: "none",
  fontSize: "20px"
};

const headingStyle = {
  color: "black",
  fontSize: "20px"
};

const headerStyle = {
  color: "black",
  fontSize: "24px"
};

Header.propTypes = {
  firebase: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth
  }))
)(Header);
