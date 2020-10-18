import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../firebase'

const useAuth = () => {
  const firebase = useContext(FirebaseContext)
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