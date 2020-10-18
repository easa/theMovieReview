import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as ROUTES from '../route/route'
import { FirebaseContext } from '../firebase'
 
const SignUpPage = () => {
  const firebase = React.useContext( FirebaseContext   )
  const INITIAL_STATE = {
    username: 'easa',
    email: 'eisanodehi@gmail.com',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  }
  const [state,setState] = useState(INITIAL_STATE)
  const onSubmit = event => {
    event.preventDefault();
    const { username, email, passwordOne } = state;
    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
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
 
const SignUpForm = ({ username, email, passwordOne, passwordTwo, error, onChange, onSubmit }) => {
  const isInvalid =
    passwordOne === '' ||
    passwordOne !== passwordTwo ||
    email === '' ||
    username === '';
  return (<form onSubmit={onSubmit}>
    <input
      name="username"
      value={username}
      onChange={onChange}
      type="text"
      placeholder="Full Name"
    />
    <input
      name="email"
      value={email}
      onChange={onChange}
      type="text"
      placeholder="Email Address"
    />
    <input
      name="passwordOne"
      value={passwordOne}
      onChange={onChange}
      type="password"
      placeholder="Password"
    />
    <input
      name="passwordTwo"
      value={passwordTwo}
      onChange={onChange}
      type="password"
      placeholder="Confirm Password"
    />
    <button disabled={isInvalid} type="submit">Sign Up</button>
    {error && <p>{error.message}</p>}
  </form>)
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
)
 
export default SignUpPage
 
export { SignUpForm, SignUpLink }