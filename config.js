import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCCaA0Q6kCSmS6B0BJ1SOlyORU4FrPffHw",
    authDomain: "something-something-rides.firebaseapp.com",
    projectId: "something-something-rides",
    storageBucket: "something-something-rides.appspot.com",
    messagingSenderId: "600821598407",
    appId: "1:600821598407:web:925f700ab6879c4fd816e2"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
