// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkzJAkqMwgRBrSU0Sy9EEHGaUbHdBqrno",
  authDomain: "t-co-879d3.firebaseapp.com",
  projectId: "t-co-879d3",
  storageBucket: "t-co-879d3.firebasestorage.app",
  messagingSenderId: "513449247706",
  appId: "1:513449247706:web:3a1ed2911a712d772a36e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)