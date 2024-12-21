// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-62a40.firebaseapp.com",
  projectId: "reactchat-62a40",
  storageBucket: "reactchat-62a40.firebasestorage.app",
  messagingSenderId: "413713351416",
  appId: "1:413713351416:web:0b935eef936890145bb10d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()