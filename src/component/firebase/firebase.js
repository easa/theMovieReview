import app, { auth } from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
// import * as CONFIG from './config'
import CONFIG from './config.private'

class Firebase {
  constructor() {
    if (!app.apps.length)
      app.initializeApp(CONFIG)
    this.auth = app.auth()
    this.database = app.database()
    this.store = app.firestore()
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;