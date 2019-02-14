import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserIsAuthenticated, UserIsNotAuthenticated } from "./helpers/auth";
import Header from "./components/layout/Header";
import Dashboard from "./components/items/Dashboard";
import HomePage from "./components/items/HomePage";
import { Provider } from "react-redux";
import NotFound from "./components/pages/NotFound";
import store from "./store";
import Login from "./components/auth/Login";
import Footer from "./components/layout/Footer";
import ingredients from "./components/pages/ingredients";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route
                  exact
                  path="/dashboard"
                  component={UserIsAuthenticated(Dashboard)}
                />
                <Route
                  exact
                  path="/login"
                  component={UserIsNotAuthenticated(Login)}
                />
                <Route exact path="/ingredients" component={ingredients} />
                <Route component={NotFound} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
