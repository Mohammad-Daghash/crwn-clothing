import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: 'AIzaSyCHANu2T1FoJVhmbeLae3V2luXtVFj-NVM',
    authDomain: 'crwn-clothing-db-74a21.firebaseapp.com',
    projectId: 'crwn-clothing-db-74a21',
    storageBucket: 'crwn-clothing-db-74a21.appspot.com',
    messagingSenderId: '599355482361',
    appId: '1:599355482361:web:058d88c61c226845e38228',
    measurementId: 'G-2BV9F17G6N',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
