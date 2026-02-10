// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "proyectoreacttiendacarrito.firebaseapp.com",
  projectId: "proyectoreacttiendacarrito",
  storageBucket: "proyectoreacttiendacarrito.firebasestorage.app",
  messagingSenderId: "744179973357",
  appId: "1:744179973357:web:0d3d0238b837768ccb60e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);