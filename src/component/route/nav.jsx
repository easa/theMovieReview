import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ContentSwitch from './contentSwitch'
import * as ROUTES from './route';

const routeArray = Object.keys(ROUTES).map(r => ({ name: r, value: ROUTES[r] }))

const Navigation = () => (
  <React.Fragment>
    <nav>
      <ul>
        {routeArray.map(r => (
          <li key={r.value}>
            <Link to={r.value}>{r.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <ContentSwitch />
  </React.Fragment >
);

export default Navigation;