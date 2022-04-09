// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaKt7aj_PSMigjwfJXVZQaPloPqrkEi1I",
  authDomain: "ema-john-simple-1cb40.firebaseapp.com",
  projectId: "ema-john-simple-1cb40",
  storageBucket: "ema-john-simple-1cb40.appspot.com",
  messagingSenderId: "1016229300008",
  appId: "1:1016229300008:web:5ae0db27507e748650b21d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
