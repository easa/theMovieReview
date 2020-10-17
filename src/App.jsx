import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './component/route/nav.jsx';
import Firebase, { FirebaseContext } from './component/firebase'
import './App.css'

const App = () => (
  <FirebaseContext.Provider value={new Firebase()}>
    <Router>
      <Navigation />
    </Router>
  </FirebaseContext.Provider>
);

export default App;