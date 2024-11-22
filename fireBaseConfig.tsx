// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpWl2RR7TyKaYk83X8GcBWdmLN6RKpsJc",
  authDomain: "meditaton-app.firebaseapp.com",
  projectId: "meditaton-app",
  storageBucket: "meditaton-app.firebasestorage.app",
  messagingSenderId: "905641976346",
  appId: "1:905641976346:web:f495ef27233aa8141f27a3",
  measurementId: "G-2F1NQWL3GT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
