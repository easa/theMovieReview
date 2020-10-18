import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, ContentSwitch } from './component/route';
import Firebase, { FirebaseContext } from './component/firebase'
import './App.css'

const App = () => (
  <FirebaseContext.Provider value={new Firebase()}>
    <Router>
      <Navbar isAuthUser={true} />
      <ContentSwitch />
    </Router>
  </FirebaseContext.Provider>
)
export default App;