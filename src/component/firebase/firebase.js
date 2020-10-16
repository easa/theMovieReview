import app from 'firebase/app';
import * as CONFIG from './config'

class Firebase {
  constructor() {
    app.initializeApp(CONFIG);
  }
}

export default Firebase;