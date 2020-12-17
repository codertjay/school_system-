import React from "react";
import { Route } from "react-router-dom";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Profile from "./containers/Profile";
import AssignmentList from "./containers/AssignmentList";
import AssignmentDetail from "./containers/AssignmentDetail";
import AssignmentCreate from "./containers/AssignmentCreate";
import Hoc from "./hoc/hoc"


const BaseRouter = () => (
  <Hoc>
    <Route exact path="/" component={AssignmentList} />{" "}
    <Route exact path="/assignment/:id" component={AssignmentDetail} />{" "}
    <Route exact path="/create/" component={AssignmentCreate} />{" "}
    <Route exact path="/login/" component={Login} />{" "}
    <Route exact path="/profile/:id" component={Profile } />{" "}
    <Route exact path="/signup/" component={Signup} />{" "}
  </Hoc>
);

export default BaseRouter;
