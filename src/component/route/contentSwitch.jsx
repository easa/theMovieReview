import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from '../signin/signup.jsx'
import Signin from '../signin/signin'
import Home from '../home/index.jsx'
import ReviewPage from '../review/reviewPage.jsx'
// TODO:  className="row"
const ContentSwitch = () => (
  <div className="container">
    <Switch>
      <Route path="/signin" > <Signin /> </Route>
      <Route path="/signup" > <Signup /> </Route>
      <Route path="/home" > <Home /> </Route>
      <Route path="/review" > <ReviewPage /> </Route>
    </Switch>
  </div>
)

export default ContentSwitch