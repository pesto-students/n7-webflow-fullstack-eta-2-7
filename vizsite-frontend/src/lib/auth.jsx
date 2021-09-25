import React, { useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import app from '../firebase';

export const AuthContext = React.createContext();

const formatUser = (user) => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  provider: user.providerData[0].providerId,
  photoUrl: user.photoURL,
  token: user.Aa,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged(
      (loggedInUser) => {
        if (loggedInUser) {
          setUser(formatUser(loggedInUser));
        } else {
          setUser(null);
        }
      },
    );
    return unsubscribe;
  }, []);
  const signinWithGoogle = () => app
    .auth()
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((response) => {
      setUser(formatUser(response.user));
    });

  return (
    <AuthContext.Provider value={{ user, signinWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
