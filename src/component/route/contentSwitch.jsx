import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from '../signin/signup.jsx'
import Signin from '../signin/signin'
import Home from '../home/index.jsx'
// TODO:  className="row"
const ContentSwitch = () => (
  <div className="container">
    <Switch>
      <Route path="/signin" > <Signin /> </Route>
      <Route path="/signup" > <Signup /> </Route>
      <Route path="/home" > <Home /> </Route>
    </Switch>
  </div>
)

export default ContentSwitch