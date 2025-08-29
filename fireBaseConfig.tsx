import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Your Google OAuth Client IDs
export const GOOGLE_CLIENT_IDS = {
  webClientId:
    "237439978029-ea7nsfr4rr68tu3442892amgdshvp113.apps.googleusercontent.com",
  iosClientId:
    "237439978029-hcdvkls3i3mf5ansqbig6hmgafrrcqc2.apps.googleusercontent.com",
  androidClientId: undefined, // will add later
};
