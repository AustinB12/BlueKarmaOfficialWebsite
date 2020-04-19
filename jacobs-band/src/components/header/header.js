import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "../../pages/homePage/home";
import VideosPage from "../../pages/videos/videos";
import ContactPage from "../../pages/contact/contact";

import "../../styles/components/header.scss";

const Header = () => {
  return (
    <Router>
      <div className="App-header">
        <h1>Blue Karma</h1>
        <ul className={"header-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <Switch className="page-switch">
        <Route path="/videos">
          <VideosPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Header;