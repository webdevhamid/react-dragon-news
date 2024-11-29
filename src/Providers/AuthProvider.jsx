import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // console.log(user);
  const [loading, setLoading] = useState(true);
  // console.log(loading);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (updatedProfile) => {
    return updateProfile(auth.currentUser, {
      displayName: updatedProfile.name,
      photoURL: updatedProfile.photo,
    });
  };

  useEffect(() => {
    // Start listening to authentication state changes
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Update the state when auth state changes
      setUser(currentUser);
      // Update loading state
      setLoading(false);
    });

    // Cleanup function to stop listening when the component unmount
    return () => {
      unSubscribe(); // Stop the listener when the component unmounts
    };
  }, []);

  // Create an object called 'authInfo' that will contain the data as a value for the auth context
  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    singInUser,
    loading,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {/* Components that will have access to this Auth Context */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
