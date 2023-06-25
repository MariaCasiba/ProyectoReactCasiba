import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn3VVy38PLym8ONkO_rHUDrLfoyoGs-II",
  authDomain: "elbordelibros.firebaseapp.com",
  projectId: "elbordelibros",
  storageBucket: "elbordelibros.appspot.com",
  messagingSenderId: "951037149936",
  appId: "1:951037149936:web:81847d6521337511cdf835"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

