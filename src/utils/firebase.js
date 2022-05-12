// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWTQogSEeKpVS1jVKAGtXq8HuwB7Xi9ZM",
  authDomain: "fir-contact-app-42183.firebaseapp.com",
  databaseURL: "https://fir-contact-app-42183-default-rtdb.firebaseio.com",
  projectId: "fir-contact-app-42183",
  storageBucket: "fir-contact-app-42183.appspot.com",
  messagingSenderId: "645433802582",
  appId: "1:645433802582:web:eace37630c1ddf656120f7"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;