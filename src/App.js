import React, { useState, useEffect } from "react";
import fire from "./fire";
import Sponsor from "./sponsor";
import Admin from "./admin"
import { Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return <div>
    <Route exact path= '/' component ={Sponsor} />
    <Route exact path= '/admin' component ={Admin} />
  </div>;
};

export default App;
