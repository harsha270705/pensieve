// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg4MR9Rf_gCpoR5aDh7cPzZjaesc7w_tI",
  authDomain: "pensieve-506c8.firebaseapp.com",
  projectId: "pensieve-506c8",
  storageBucket: "pensieve-506c8.appspot.com",
  messagingSenderId: "333259959145",
  appId: "1:333259959145:web:1921243739530158a92bf8",
  measurementId: "G-QCLHVPCGQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseConfig);
export const db = getFirestore(app);