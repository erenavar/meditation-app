// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpWl2RR7TyKaYk83X8GcBWdmLN6RKpsJc",
  authDomain: "meditaton-app.firebaseapp.com",
  projectId: "meditaton-app",
  storageBucket: "meditaton-app.firebasestorage.app",
  messagingSenderId: "905641976346",
  appId: "1:905641976346:web:f495ef27233aa8141f27a3",
  measurementId: "G-2F1NQWL3GT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
