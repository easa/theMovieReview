import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as ROUTES from '../route/routeNonAuth'
import { FirebaseContext } from '../firebase'
import SignUpForm from './signupForm'
 
const SignUpPage = () => {
  const firebase = React.useContext( FirebaseContext   )
  const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  }
  const [state,setState] = useState(INITIAL_STATE)
  const onSubmit = event => {
    event.preventDefault();
    const { email, passwordOne } = state;
    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(() => {
        setState({ ...INITIAL_STATE, redirect: '/home' });
      })
      .catch(error => {
        setState({ ...state, error });
    });
  }
  const onChange = event => { 
    setState({ ...state, [event.target.name]: event.target.value })
  }
  if (state.redirect) {
    return <Redirect to={state.redirect} />
  }
  return (<div>
    <h1>SignUp</h1>
     <SignUpForm {...state} onChange={onChange} onSubmit={onSubmit} />
  </div>)
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
)
 
export default SignUpPage
 
export { SignUpForm, SignUpLink }