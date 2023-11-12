// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrvFJSc0EVU3ak63jcFmEhNIRsZoc3Fio",
  authDomain: "netflixgpt-ffa90.firebaseapp.com",
  projectId: "netflixgpt-ffa90",
  storageBucket: "netflixgpt-ffa90.appspot.com",
  messagingSenderId: "667638863099",
  appId: "1:667638863099:web:fa54920c49cd097336cc5e",
  measurementId: "G-PFYF2DR152",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
