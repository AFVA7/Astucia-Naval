// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdk_VqZA6K-heSEqQ_B1LiswHt641AMY4",
    authDomain: "react-cursos-6ab5c.firebaseapp.com",
    projectId: "react-cursos-6ab5c", 
    storageBucket: "react-cursos-6ab5c.appspot.com",
    messagingSenderId: "536794610454",
    appId: "1:536794610454:web:4e0f68ef10413dd4cb6e37",
    measurementId: "G-STNEM58478"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);