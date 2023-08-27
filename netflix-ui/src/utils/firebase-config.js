import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDCnLM3nF9NgD9Ah13DCl3eCf2itxpUQM0",
  authDomain: "react-netflix-6b134.firebaseapp.com",
  projectId: "react-netflix-6b134",
  storageBucket: "react-netflix-6b134.appspot.com",
  messagingSenderId: "659339214054",
  appId: "1:659339214054:web:1d486795a3f1272f1f0f27",
  measurementId: "G-YQKB01NKYF",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);