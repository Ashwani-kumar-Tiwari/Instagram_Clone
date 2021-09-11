// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmqqJVQvjMv6tInpx1OxV0y8E_EiN_EGI",
  authDomain: "instagram-clone-8aec9.firebaseapp.com",
  projectId: "instagram-clone-8aec9",
  storageBucket: "instagram-clone-8aec9.appspot.com",
  messagingSenderId: "1022757748325",
  appId: "1:1022757748325:web:8976e2fd4ee6126c2b508c",
  measurementId: "G-BCRWSJ515V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//npm install -g firebase-tools
