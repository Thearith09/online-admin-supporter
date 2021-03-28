import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyCas216vGiMjwpfG0kR6Ljx8DNHI-SK4mY",
    authDomain: "online-admin-supporter.firebaseapp.com",
    projectId: "online-admin-supporter",
    storageBucket: "online-admin-supporter.appspot.com",
    messagingSenderId: "636445875334",
    appId: "1:636445875334:web:3dd8a41a7b0e85a8ab8507"
};

firebase.initializeApp(firebaseConfig);

const functions = firebase.functions();
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp, functions }; 