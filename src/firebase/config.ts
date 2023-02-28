import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDEIIGDf1xDpUnKT90_tFHRVz3tgmIfE-4",
    authDomain: "cooking-site-85b4d.firebaseapp.com",
    projectId: "cooking-site-85b4d",
    storageBucket: "cooking-site-85b4d.appspot.com",
    messagingSenderId: "112959002344",
    appId: "1:112959002344:web:a9e3a2bedc950ca4bf9b5d"
};

// Initializing firebase
firebase.initializeApp(firebaseConfig);

// Initializing services
const projectFirestore = firebase.firestore();

export { projectFirestore }