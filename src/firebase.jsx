// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKqFlG3LFZmpYc-kjPhS260GJV0XYCANM",
  authDomain: "crisps-app-5f0bc.firebaseapp.com",
  projectId: "crisps-app-5f0bc",
  storageBucket: "crisps-app-5f0bc.appspot.com",
  messagingSenderId: "813740086300",
  appId: "1:813740086300:web:1f5f0542d02dcce6aa7bd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
