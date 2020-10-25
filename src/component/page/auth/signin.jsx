import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Context } from '../../app/'
import { SignUpLink } from './signup.jsx'

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
  const { firebase } = useContext(Context)
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
    <div className="col-md-6 coffset-md-3">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInzputEmail1">Email address</label>
          <input value={email} onChange={onChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input value={password} onChange={onChange} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button className="btn btn-primary" disabled={isInvalid} type="submit"> Sign In </button>
        {error && <p className="text-danger">{error.message}</p>}
      </form>
    </div>
  )
}

export default SignInPage

export { SignInForm }