import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/// Import the functions you need from the SDKs yAou need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR5oykMtmyanR0Vqi9AObs0yvng-6m8Wg",
  authDomain: "e-commerce-d3468.firebaseapp.com",
  projectId: "e-commerce-d3468",
  storageBucket: "e-commerce-d3468.appspot.com",
  messagingSenderId: "463303372759",
  appId: "1:463303372759:web:28ee7ddfca9fbf47c06592",
  measurementId: "G-D9R52JRH37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

reportWebVitals();