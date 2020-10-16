import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import * as ROUTES from '../route/route'
 
const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);
 
const SignUpForm =(props)=> {
  const onSubmit = event => {  }
  return (<form onSubmit={onSubmit}>the form</form>)
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
)
 
export default SignUpPage
 
export { SignUpForm, SignUpLink }