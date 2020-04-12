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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
