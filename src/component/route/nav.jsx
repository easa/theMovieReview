import React from 'react';
import { Link, Route } from 'react-router-dom';

import * as ROUTES from './route';

const routeArray = Object.keys(ROUTES).map(r => ({ name: r, value: ROUTES[r] }))

const Navigation = () => (
  <nav>
    <ul>
      {routeArray.map(r => (
        <li key={r.value}>
          <Link to={r.value}>{r.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;