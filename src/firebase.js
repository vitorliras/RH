// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ7i87hI3IkuAJYKbe-dMLfpP366-PjVQ",
  authDomain: "projeto-recursos-humanos-tcc.firebaseapp.com",
  projectId: "projeto-recursos-humanos-tcc",
  storageBucket: "projeto-recursos-humanos-tcc.appspot.com",
  messagingSenderId: "652206827822",
  appId: "1:652206827822:web:0b67e8531dd67c984d72bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export{
    auth,
    firestore
}