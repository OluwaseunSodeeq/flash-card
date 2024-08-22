// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhkFYG0vYRi0t0NoBjMAgbdg4OJS0jB-w",
  authDomain: "flashcardapp-de5c2.firebaseapp.com",
  projectId: "flashcardapp-de5c2",
  storageBucket: "flashcardapp-de5c2",
  messagingSenderId: "177095540463",
  appId: "1:177095540463:web:27dad39b210d46fb2fa51a",
  measurementId: "G-BEQW7QNSMY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Use getFirestore instead of getFirebase

export { db };
