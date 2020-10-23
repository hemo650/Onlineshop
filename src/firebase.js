import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDKcDwSrjKc-rzhHbVLTLQB0JT3yGnDfM4",
    authDomain: "web-app-a865f.firebaseapp.com",
    databaseURL: "https://web-app-a865f.firebaseio.com",
    projectId: "web-app-a865f",
    storageBucket: "web-app-a865f.appspot.com",
    messagingSenderId: "840576878667",
    appId: "1:840576878667:web:2d47cbb37d13b4077ae5ce",
    measurementId: "G-1PLK94G7D0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };