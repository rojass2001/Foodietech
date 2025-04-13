// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9zlYeX6K8fz0MA4Hy_vbw-MhttlcDX0k",
  authDomain: "foodietech-5aa62.firebaseapp.com",
  projectId: "foodietech-5aa62",
  storageBucket: "foodietech-5aa62.firebasestorage.app",
  messagingSenderId: "428246839563",
  appId: "1:428246839563:web:635b0960247ac6d09ab20e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}