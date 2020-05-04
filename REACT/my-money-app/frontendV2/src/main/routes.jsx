import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Dashboard from "../vamos/dashboard";
import BillingCycle from "../billingCycle/billingCycle";
import Vamos from "../vamos/vamos";

export default (props) => (
  <Switch>
    <Route exact={true} path="/" component={Dashboard} />
    <Route path="/billingCycles" component={BillingCycle} />
    <Route path="/vamos-la" component={Vamos} />
    <Redirect from="*" to="/" />
  </Switch>
);
