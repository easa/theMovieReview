
import React from 'react'
const SignUpForm = ({ username, email, passwordOne, passwordTwo, error, onChange, onSubmit }) => {
  const isInvalid = passwordOne === '' || passwordOne !== passwordTwo || email === '' || username === '';
  return (
    <div className="col-md-6 coffset-md-3">

      <form onSubmit={onSubmit}>
      <div className="form-group">
          <label htmlFor="exampleInzputEmail2">Username</label>
          <input value={username} onChange={onChange} name="username" type="text" className="form-control" id="exampleInputUsername1" placeholder="Enter username" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInzputEmail2">Email address</label>
          <input value={email} onChange={onChange} name="email" type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPasswordOne">Password</label>
          <input value={passwordOne} onChange={onChange} name="passwordOne" type="password" className="form-control" id="exampleInputPasswordOne" placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPasswordTwo">Password again</label>
          <input value={passwordTwo} onChange={onChange} name="passwordTwo" type="password" className="form-control" id="exampleInputPasswordTwo" placeholder="Enter password again" />
        </div>
        <button className="btn btn-primary" disabled={isInvalid} type="submit"> Sign Up </button>
        {error && <p className="text-danger">{error.message}</p>}
      </form>
    </div>
  )
}
export default SignUpForm