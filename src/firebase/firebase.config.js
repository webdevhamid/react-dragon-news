// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8QmoEM0Hf4iKsLIoGQ3PqP3MJjSAmZ0E",
  authDomain: "dragon-news-a2038.firebaseapp.com",
  projectId: "dragon-news-a2038",
  storageBucket: "dragon-news-a2038.firebasestorage.app",
  messagingSenderId: "102610928549",
  appId: "1:102610928549:web:a28923ced31365b22fde4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
