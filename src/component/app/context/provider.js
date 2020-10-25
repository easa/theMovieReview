import React, { useReducer, useEffect } from 'react'
import reducer from '../reducer'
import AppContext from './context'
import Application from './application'

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: { name: '', id: '' },
    list: [],
    temp: { title: '', review: '' }
  })

  return (
    <AppContext.Provider value={new Application(state, dispatch)}>
      {children}
    </AppContext.Provider>
  )
}
export default Provider