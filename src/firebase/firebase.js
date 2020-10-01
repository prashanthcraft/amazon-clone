import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBYsE32FYMhzMgYJb5ARzCH18tG43bCTpM",
  authDomain: "challenge-bb52d.firebaseapp.com",
  databaseURL: "https://challenge-bb52d.firebaseio.com",
  projectId: "challenge-bb52d",
  storageBucket: "challenge-bb52d.appspot.com",
  messagingSenderId: "526025531022",
  appId: "1:526025531022:web:26a2b59fdac43f28dab3df",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
