import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from '../page/auth/signup.jsx'
import Signin from '../page/auth/signin'
import Home from '../page/home/index.jsx'
import SingleReviewPage from '../page/review/singleReview.jsx'
import ReviewsPage from '../page/review/reviewsPage.jsx'
import AddReview from '../page/review/addReview.jsx'
// TODO:  className="row" for Switch that currently add a simple div
const ContentSwitch = () => (
  <div className="container">
    <Switch>
      <Route path="/signin" > <Signin /> </Route>
      <Route path="/signup" > <Signup /> </Route>
      <Route path="/home" > <Home /> </Route>
      <Route path="/reviews" > <ReviewsPage /> </Route>
      <Route path="/review/:id" > <SingleReviewPage /> </Route>
      <Route path="/addreview" > <AddReview /> </Route>
    </Switch>
  </div>
)

export default ContentSwitch