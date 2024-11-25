import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    // Start listening to authentication state changes
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the state when auth state changes
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
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {/* Components that will have access to this Auth Context */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
