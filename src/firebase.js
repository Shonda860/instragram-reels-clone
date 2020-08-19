import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDogJxmuvqpw_Ay70QUKEPX5hFJ1Nh6Lf4",
  authDomain: "ig-reels-84ef8.firebaseapp.com",
  databaseURL: "https://ig-reels-84ef8.firebaseio.com",
  projectId: "ig-reels-84ef8",
  storageBucket: "ig-reels-84ef8.appspot.com",
  messagingSenderId: "76246023972",
  appId: "1:76246023972:web:0103250c68f89ad22dbdb1",
  measurementId: "G-NTCXDHZCCN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
