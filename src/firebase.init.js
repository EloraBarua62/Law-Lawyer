// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2sUUkqnNX7l6cATUq-WC2rpY9-7g3pV8",
    authDomain: "law-and-lawyer-764d9.firebaseapp.com",
    projectId: "law-and-lawyer-764d9",
    storageBucket: "law-and-lawyer-764d9.appspot.com",
    messagingSenderId: "377354003713",
    appId: "1:377354003713:web:d38563e78d07fe6b85e700"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;