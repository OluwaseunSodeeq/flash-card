// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirebase } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhkFYG0vYRi0t0NoBjMAgbdg4OJS0jB-w",
  authDomain: "flashcardapp-de5c2.firebaseapp.com",
  projectId: "flashcardapp-de5c2",
  storageBucket: "flashcardapp-de5c2.appspot.com",
  messagingSenderId: "177095540463",
  appId: "1:177095540463:web:27dad39b210d46fb2fa51a",
  measurementId: "G-BEQW7QNSMY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app);
export { db };
