import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';
import { firebaseConfig } from '../config/firebaseConfig';

const projectFirebase = firebase.initializeApp(firebaseConfig);
const projectAuth = projectFirebase.auth();
const projectFirestore = projectFirebase.firestore();

export { projectFirebase, projectAuth, projectFirestore };
