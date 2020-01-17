import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCW7TngPKvC3UfEGTKLA29Ul6VOK_H-u7M",
    authDomain: "imran-clothing-db.firebaseapp.com",
    databaseURL: "https://imran-clothing-db.firebaseio.com",
    projectId: "imran-clothing-db",
    storageBucket: "imran-clothing-db.appspot.com",
    messagingSenderId: "921083850251",
    appId: "1:921083850251:web:716003dcdb078513c5610e",
    measurementId: "G-T7FVCKH5EB"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('Error creating user.', error.message);
    }
  }

  return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;