import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "proyecto-03-coderhouse.firebaseapp.com",
  projectId: "proyecto-03-coderhouse",
  storageBucket: "proyecto-03-coderhouse.firebasestorage.app",
  messagingSenderId: "386542604807",
  appId: "1:386542604807:web:a588043d183844ee3fd0a2",
  measurementId: "G-Z62EKNTMHD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)