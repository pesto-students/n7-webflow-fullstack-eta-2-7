import React, { useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import app from '../firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);
  const signinWithGoogle = () => app
    .auth()
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((response) => setUser(response.user));

  return (
    <AuthContext.Provider value={{ user, signinWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
