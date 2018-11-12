import React from "react";
import { Route } from "react-router-dom";
import Login from "../components/login/Index";
import Index  from "../components/views/Index";
let pages = (
  <div className="contain">
    <Route exact path="/" component={Login} />
    <Route exact path="/login" component={Login} />
    <Route path="/views" component={Index} />
  </div>
);
export default pages ;