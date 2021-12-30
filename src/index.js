import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
//import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SignupPage from "views/SignupPage/SignupPage.js";
import ContactPage from "views/ContactPage/ContactPage.js";
import ServicePage from "views/ServicePage/ServicePage.js";
import GigsPage from "views/GigsPage/GigsPage.js";
import CustomJobs from "views/CustomJob/CustomJobs.js";
import GuideBuyPage from "views/GuideBuyPage/GuideBuyPage.js";
import GuideSellPage from "views/GuideSellPage/GuideSellPage.js";
import WorkerPage from "views/WorkerPage/WorkerPage.js";
import FindJobs from "views/FindJobs/FindJobs.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/signup-page" component={SignupPage} />
      <Route path="/contact-page" component={ContactPage} />
      <Route path="/service-page" component={ServicePage} />
      <Route path="/gigs-page" component={GigsPage} />
      <Route path="/customjobs-page" component={CustomJobs} />
      <Route path="/guidebuy-page" component={GuideBuyPage} />
      <Route path="/guidesell-page" component={GuideSellPage} />
      <Route path="/worker-page" component={WorkerPage} />
      <Route path="/findjobs-page" component={FindJobs} />

      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
