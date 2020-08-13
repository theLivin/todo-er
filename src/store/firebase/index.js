import * as firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe_iLZXaoOReAnlSwauFpwVap80Rghl9I",
  authDomain: "todolist-aaced.firebaseapp.com",
  databaseURL: "https://todolist-aaced.firebaseio.com",
  projectId: "todolist-aaced",
  storageBucket: "todolist-aaced.appspot.com",
  messagingSenderId: "566595317113",
  appId: "1:566595317113:web:c66fe905bc8455a446d3a8",
  measurementId: "G-VGFYRJ3192",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
