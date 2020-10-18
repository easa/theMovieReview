import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from './route'
import { SignOutButton } from '../signin/signout'
import useAuth from '../signin/useAuth'


const Navigation = () => {
  const isAuth = useAuth()
  const NewRoutes = { "SignIn": "/signin", "SignUp": "/signup" }
  const routeArray = isAuth ?
    Object.keys(routes).map(r => ({ name: r, value: routes[r] }))
    : Object.keys(NewRoutes).map(r => ({ name: r, value: NewRoutes[r] }))
  return <nav>
    <ul>
      {routeArray.map(r => <li key={r.value}>
        <Link to={r.value}>{r.name}</Link>
      </li>)}
      {isAuth ? <li><SignOutButton /></li> : ''}
    </ul>
  </nav>
}

export default Navigation