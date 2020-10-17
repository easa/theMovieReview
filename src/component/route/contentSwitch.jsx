import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from '../signup/signup.jsx'
import Signin from '../signin/signin'

const ContentSwitchy = () => (<Switch>
  <Route path="/signin" > <Signin /> </Route>
  <Route path="/signup" > <Signup /> </Route>
</Switch>)

export default ContentSwitchy