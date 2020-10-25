import { useState, useEffect, useContext } from 'react';
import { Context } from '../../app'

const useAuth = () => {
  const { firebase } = useContext(Context)
  const [isOnline, setIsOnline] = useState(false);
  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      setIsOnline(user ? true : false)
    })
    return () => { unsubscribe() }
  }, [])
  return isOnline;
}

export default useAuth