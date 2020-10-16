import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './component/route/nav.jsx';
import './App.css'

const App = () => (
  <Router>
    <Navigation />
  </Router>
);

export default App;