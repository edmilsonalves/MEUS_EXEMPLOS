import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";

export default (props) => (
  <div className="content-wrapper">
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/billingCycles">
          <BillingCycle />
        </Route>
      </Switch>
    </Router>
  </div>
);
