// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcXHyDQ0_qo4x7Q-dUQJLNqPiRkoXDM_4",
  authDomain: "task-managment-2ce16.firebaseapp.com",
  projectId: "task-managment-2ce16",
  storageBucket: "task-managment-2ce16.firebasestorage.app",
  messagingSenderId: "466179174097",
  appId: "1:466179174097:web:279ff185ff8f0fc4c71ff0",
  measurementId: "G-10B6HRG6K0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
