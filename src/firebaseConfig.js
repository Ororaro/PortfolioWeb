// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1QnAbjC5Sts9tBjPXqp4l0QjQFeQLajo",
  authDomain: "contactpage-5413d.firebaseapp.com",
  projectId: "contactpage-5413d",
  storageBucket: "contactpage-5413d.appspot.com",
  messagingSenderId: "846235925422",
  appId: "1:846235925422:web:ca0eb4a04469097f53e63f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);