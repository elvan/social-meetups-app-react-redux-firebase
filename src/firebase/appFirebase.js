import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';
import { firebaseConfig } from '../config/firebaseConfig';

const appFirebase = firebase.initializeApp(firebaseConfig);
const appAuth = appFirebase.auth();
const appFirestore = appFirebase.firestore();

export { appFirebase, appAuth, appFirestore };
