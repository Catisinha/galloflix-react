// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKycwS1wKImWZLdCnxUSTUplRLtF6ZRu0",
  authDomain: "galloflix-e1f8a.firebaseapp.com",
  projectId: "galloflix-e1f8a",
  storageBucket: "galloflix-e1f8a.appspot.com",
  messagingSenderId: "488517188019",
  appId: "1:488517188019:web:6e8ef758c9b85c59bab3c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);