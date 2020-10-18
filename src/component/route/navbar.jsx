import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom'
import * as routeAuth from './routeAuth'
import * as routeNonAuth from './routeNonAuth'
import { SignOutButton } from '../signin/signout'
import useAuth from '../signin/useAuth'

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
    console.log('NAVBAR: is auth ? ', isAuth)
    setVisibleSignout(isAuth)
    setRouts(loadHeader(isAuth))
  },[isAuth])
  return <nav>
    <ul>
      {routes.map(r => <li key={r.value}>
        <Link to={r.value}>{r.name}</Link>
      </li>)}
      {visibleSignout ? <li><SignOutButton /></li> : ''}
    </ul>
  </nav>
}

export default Navigation