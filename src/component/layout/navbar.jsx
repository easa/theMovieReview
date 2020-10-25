import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as routeAuth from './route/routeAuth'
import * as routeNonAuth from './route/routeNonAuth'
import { SignOutButton } from '../page/auth/signout'
import useAuth from '../app/auth/useAuth'

const loadHeader = (isloadWithAuth) => {
  if (isloadWithAuth)
    return Object.keys(routeAuth).map(r => ({ name: r, value: routeAuth[r] }))
  return Object.keys(routeNonAuth).map(r => ({ name: r, value: routeNonAuth[r] }))
}
const Navigation = () => {
  const isAuth = useAuth()
  const [routes, setRouts] = useState([])
  const [visibleSignout, setVisibleSignout] = useState(false)
  useEffect(() => {
    setVisibleSignout(isAuth)
    setRouts(loadHeader(isAuth))
  }, [isAuth])
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        {routes.map(r => <li key={r.value}>
          <Link className="nav-link" to={r.value}>{r.name}</Link>
        </li>)}
        {visibleSignout ? <li className="nav-link"><SignOutButton /></li> : ''}
      </ul>
    </nav>
  )
}

export default Navigation