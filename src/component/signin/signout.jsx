import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { FirebaseContext } from '../firebase/index.js'

const SignOutButton = () => {
  const firebase = useContext(FirebaseContext)
  const [state, setState] = useState({})
  const onClick = () => {
    firebase.doSignOut().then(() => {
      console.log('loged out')
      setState({ redirect: '/' })
    }).catch(error => {
      console.log('log error', error)

      setState({ error })
    })
  }
  if (state.redirect) {
    return <Redirect to={state.redirect} />
  }
  return (
    <button onClick={onClick} tooltip={state.error} className="btn btn-sm btn-outline-secondary" type="button">
      Sign Out
    </button>
  )
}

export { SignOutButton }