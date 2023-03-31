import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBnzGK9o7jIeHlAr6D_PObgGDv93JCSQ6Q",
    authDomain: "linkedin-clone-f8565.firebaseapp.com",
    projectId: "linkedin-clone-f8565",
    storageBucket: "linkedin-clone-f8565.appspot.com",
    messagingSenderId: "743348193260",
    appId: "1:743348193260:web:7e72c6edd6a303b380e2c9",
    measurementId: "G-W7GQRSFZYX"
};

// connect everything from local to live server
const firebaseApp = firebase.initializeApp(firebaseConfig);


//gets the firebase
const db = firebaseApp.firestore();
//providing authentication
const auth = firebase.auth();

export { auth, db };