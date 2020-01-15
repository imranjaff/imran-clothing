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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
