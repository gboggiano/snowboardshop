import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmAwumBdV6BGeAsdZxFd3_N4TCQV6OwAM",
  authDomain: "snowster-1802a.firebaseapp.com",
  projectId: "snowster-1802a",
  storageBucket: "snowster-1802a.appspot.com",
  messagingSenderId: "997020527754",
  appId: "1:997020527754:web:465045f0949ce9a6015173",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
