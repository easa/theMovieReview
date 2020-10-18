import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { SignUpLink } from './signup.jsx'
import { FirebaseContext } from '../firebase/index.js'

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <SignUpLink />
  </div>
)

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

const SignInForm = () => {
  const firebase = useContext(FirebaseContext)
  const [state, setState] = useState(INITIAL_STATE)
  const onSubmit = event => {
    event.preventDefault()
    const { email, password } = state
    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setState({ ...INITIAL_STATE, redirect: '/home' })
      })
      .catch(error => {
        setState({ ...state, error })
      })
  }
  const onChange = event => {
    setState({ ...state, [event.target.name]: event.target.value })
  }
  const { email, password, error } = state
  const isInvalid = password === '' || email === ''
  if (state.redirect) {
    return <Redirect to={state.redirect} />
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="password"
        value={password}
        onChange={onChange}
        type="password"
        placeholder="Password"
      />
      <button disabled={isInvalid} type="submit">
        Sign In
      </button>
      {error && <p>{error.message}</p>}
    </form>
  )
}

export default SignInPage

export { SignInForm }