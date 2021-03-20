// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDPGieUnUF4IOtda5jN12-cXzlZ-i-dfew",
    authDomain: "instagram-clone-c005a.firebaseapp.com",
    projectId: "instagram-clone-c005a",
    storageBucket: "instagram-clone-c005a.appspot.com",
    messagingSenderId: "831442286285",
    appId: "1:831442286285:web:890c50310b6e7870819b84",
    measurementId: "G-JGN9RDDJ9C",

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
