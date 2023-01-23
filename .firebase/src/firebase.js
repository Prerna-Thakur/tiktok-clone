import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGxA53YqwqhCSdduPmxIvPdAvrjh3jysI",
    authDomain: "tiktok-clone-9f750.firebaseapp.com",
    projectId: "tiktok-clone-9f750",
    storageBucket: "tiktok-clone-9f750.appspot.com",
    messagingSenderId: "79739361418",
    appId: "1:79739361418:web:f1739b51f5f8abbb51f573",
    measurementId: "G-4LC8JZCN8R"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
