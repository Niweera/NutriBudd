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
import Ingredients from "./components/pages/Ingredients";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MealContent from "./components/items/MealContent";
import SearchIngredients from "./components/items/SearchIngredients";
import CalculateCalories from "./components/items/CalculateCalories";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <div>
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
                <Route exact path="/quicklinks" component={Ingredients} />
                <Route exact path="/mealcontent" component={MealContent} />
                <Route exact path="/searchingredients" component={SearchIngredients} />
                <Route exact path="/calculatecalories" component={CalculateCalories} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
