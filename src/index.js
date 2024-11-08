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
import WorkerGigsPage from "views/WorkerGigsPage/WorkerGigsPage.js";
import CustomJobs from "views/CustomJob/CustomJobs.js";
import GuideBuyPage from "views/GuideBuyPage/GuideBuyPage.js";
import GuideSellPage from "views/GuideSellPage/GuideSellPage.js";
import WorkerPage from "views/WorkerPage/WorkerPage.js";
import FindJobs from "views/FindJobs/FindJobs.js";
import WorkerDashboard from "views/WorkerDashboard/WorkerDashboard.js";
import CreateGig from "views/GigsPage/Sections/CreateGig.js";
import CreateWorkerGig from "views/WorkerGigsPage/Sections/CreateGig.js";
import UpdateGig from "views/GigsPage/Sections/UpdateGig.js";
import UpdateWorkerGig from "views/WorkerGigsPage/Sections/UpdateGig.js";
import CreateJob from "views/CustomJob/Sections/CreateJob.js";
import UpdateJob from "views/CustomJob/Sections/UpdateJob.js";
import MakePayment from "views/MakePayment/MakePayment.js";
import Gig from "views/WorkerGigsPage/Sections/Gig.js";
import Gig2 from "views/GigsPage/Sections/Gig2.js";
import App from "views/LandingPage/Sections/stripe.js";
// import Chat from "components/Chat/Chat.js";

///blockchain
import { MoralisProvider } from "react-moralis";
///

var hist = createBrowserHistory();

ReactDOM.render(
  <MoralisProvider
    appId="07RRGjqln24tYpfWAAfw81tWJC2n4a5kyBAUIGwz"
    serverUrl="https://etnhoroi3zpj.usemoralis.com:2053/server"
  >
    <Router history={hist}>
      <Switch>
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/profile-page/:client_id" component={ProfilePage} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/signup-page" component={SignupPage} />
        <Route path="/contact-page" component={ContactPage} />
        <Route path="/service-page/:category" component={ServicePage} />
        <Route path="/gigs-page" component={GigsPage} />
        <Route path="/workerGigs-page/:workerId" component={WorkerGigsPage} />
        <Route path="/customjobs-page/:userId" component={CustomJobs} />
        <Route path="/guidebuy-page" component={GuideBuyPage} />
        <Route path="/guidesell-page" component={GuideSellPage} />
        <Route path="/worker-page" component={WorkerPage} />
        <Route path="/findjobs-page" component={FindJobs} />
        <Route
          path="/worker-dashboard/:worker_id"
          component={WorkerDashboard}
        />
        <Route path="/creategig-page" component={CreateGig} />
        <Route path="/createWorkerGig-page" component={CreateWorkerGig} />
        <Route path="/updategig-page/:gigId" component={UpdateGig} />
        <Route
          path="/updateWorkerGig-page/:gigId"
          component={UpdateWorkerGig}
        />
        <Route path="/createjob-page" component={CreateJob} />
        <Route path="/updatejob-page/:jobId" component={UpdateJob} />
        <Route path="/payment-page" component={MakePayment} />
        <Route path="/gig/:gigId" component={Gig} />
        <Route path="/gig2" component={Gig2} />
        {/* <Route path="/chat" component={Chat} /> */}

        <Route path="/stripe" component={App} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  </MoralisProvider>,
  document.getElementById("root")
);
