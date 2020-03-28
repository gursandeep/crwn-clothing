import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBeBkvGEXI7qa1L27IOuXBq5xT90uAaesI",
  authDomain: "crwn-db-236e5.firebaseapp.com",
  databaseURL: "https://crwn-db-236e5.firebaseio.com",
  projectId: "crwn-db-236e5",
  storageBucket: "crwn-db-236e5.appspot.com",
  messagingSenderId: "973212457805",
  appId: "1:973212457805:web:ced611ea5f1b6e8fa7f504",
  measurementId: "G-7RQYY09MPV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
