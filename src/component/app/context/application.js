import Firebase from '../../firebase'

class App {
  constructor(state, dispatch) {
    this.user = state.user
    this.list = state.list
    this.temp = state.temp
    this.dispatch = dispatch
  }
  firebase = new Firebase()
  login = (value) => { this.dispatch({ type: 'login', value }) }
  setList = (value) => { this.dispatch({ type: 'setlist', value }) }
}

export default App