import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4uLkXdsarc6q-aaXhMyBGsP4qeo0wPzA",
  authDomain: "portfolio-3d619.firebaseapp.com",
  projectId: "portfolio-3d619",
  storageBucket: "portfolio-3d619.appspot.com",
  messagingSenderId: "71711927007",
  appId: "1:71711927007:web:3daa1c20c72bdf0492576a",
  measurementId: "G-QYY5W8KSBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
// console.log(analytics);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
