import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, ContentSwitch } from './component/layout/route';
import { Context, Provider } from './component/app/context'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => (
  <Provider value={Context}>
    <Router>
      <Navbar isAuthUser={true} />
      <ContentSwitch />
    </Router>
  </Provider>
)
export default App;