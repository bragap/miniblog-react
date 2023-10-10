// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBEEVi7IGFxsR1PIdIU1MUKZdeBlhI2Aq8",
  authDomain: "miniblog-aa7ae.firebaseapp.com",
  projectId: "miniblog-aa7ae",
  storageBucket: "miniblog-aa7ae.appspot.com",
  messagingSenderId: "784986428735",
  appId: "1:784986428735:web:75dbd4ad523223c9fe6f8a",
  measurementId: "G-G4RMQS5PV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db }