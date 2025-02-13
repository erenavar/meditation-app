import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";

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
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
