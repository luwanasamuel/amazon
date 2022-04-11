// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC6sY58qVOGpkK6JmIdyuNpMpsmNoCnXvg",
  authDomain: "clone-af670.firebaseapp.com",
  projectId: "clone-af670",
  storageBucket: "clone-af670.appspot.com",
  messagingSenderId: "1093581354133",
  appId: "1:1093581354133:web:e9b7dd00632a490c3f179c",
  measurementId: "G-TH3369RN89",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
