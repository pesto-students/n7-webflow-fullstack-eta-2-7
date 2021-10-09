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
  const [loading, setLoading] = useState(true);
  const handleSetUser = (loggedInUser) => {
    if (loggedInUser) {
      const formattedUser = formatUser(loggedInUser);
      const { token } = formattedUser;
      localStorage.setItem('token', token);
      setUser(formattedUser);
      setLoading(false);
    } else {
      setLoading(false);
      setUser(null);
    }
  };

  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged(handleSetUser);
    return unsubscribe;
  }, []);
  const signinWithGoogle = () => app
    .auth()
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((response) => {
      handleSetUser(response.user);
    }).catch((error) => {
      setLoading(false);
      console.log(error);
    });

  const signinWithEmail = ({ email, password }) => app
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      handleSetUser(response.user);
    }).catch((error) => {
      setLoading(false);
      console.log(error);
    });

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
      localStorage.removeItem('token');
      // signed out
    } catch (e) {
      // an error
    }
  };

  return (
    <AuthContext.Provider value={{
      user, signinWithGoogle, authLoading: loading, signOut, signinWithEmail,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
