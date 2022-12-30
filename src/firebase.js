// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCOcm9mOs-AnbCznTr5FLRdMQes9cazA0",
  authDomain: "clone-688fc.firebaseapp.com",
  projectId: "clone-688fc",
  storageBucket: "clone-688fc.appspot.com",
  messagingSenderId: "331945311138",
  appId: "1:331945311138:web:163edfe0bad51f938810fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };
