// Import required functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration object containing project credentials
const firebaseConfig = {
  apiKey: "AIzaSyD9zlYeX6K8fz0MA4Hy_vbw-MhttlcDX0k",             // API key for Firebase project
  authDomain: "foodietech-5aa62.firebaseapp.com",                // Auth domain for Firebase Auth
  projectId: "foodietech-5aa62",                                 // Unique project ID in Firebase
  storageBucket: "foodietech-5aa62.firebasestorage.app",        // Cloud Storage bucket URL
  messagingSenderId: "428246839563",                             // Sender ID for Firebase Cloud Messaging
  appId: "1:428246839563:web:635b0960247ac6d09ab20e"              // App ID for this web app
};

// Initialize the Firebase app instance using the provided config
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication service from the app instance
const auth = getAuth(app);

// Export the auth instance so it can be used throughout the app
export { auth };
