import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDgIsQuvKqkK-zKhxucSQMeoX-2Gia3uFo",
    authDomain: "frameworkmodul11.firebaseapp.com",
    databaseURL: "https://frameworkmodul11-default-rtdb.firebaseio.com",
    projectId: "frameworkmodul11",
    storageBucket: "frameworkmodul11.appspot.com",
    messagingSenderId: "356939946940",
    appId: "1:356939946940:web:8c6c418afa9a4c5e91a9b9",
    measurementId: "G-486Y4X4FWD"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;