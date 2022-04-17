// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjzaIqOiNM-MsXabu1RcshRkRVcgMrT6A",
    authDomain: "law-and-lawyer.firebaseapp.com",
    projectId: "law-and-lawyer",
    storageBucket: "law-and-lawyer.appspot.com",
    messagingSenderId: "904340395750",
    appId: "1:904340395750:web:85a3189b462ea742758d27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;