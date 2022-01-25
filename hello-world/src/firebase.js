// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBUrtd98OFCAltsO7zer-_rMNars3AyE0g",
  authDomain: "ejemplo-25cfc.firebaseapp.com",
  projectId: "ejemplo-25cfc",
  storageBucket: "ejemplo-25cfc.appspot.com",
  messagingSenderId: "935353475337",
  appId: "1:935353475337:web:454bbc074a68522d4973d8"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

console.log(app);
