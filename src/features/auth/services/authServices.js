import firebase from 'firebase/app';
import { appAuth } from '../../../firebase/appFirebase';

export function registerWithCredentialsToFirebase(credentials) {
  return appAuth.createUserWithEmailAndPassword(
    credentials.email,
    credentials.password
  );
}

export function loginWithCredentialsToFirebase(credentials) {
  return appAuth.signInWithEmailAndPassword(
    credentials.email,
    credentials.password
  );
}

export function socialLoginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return appAuth.signInWithPopup(provider);
}

export function logoutFromFirebase() {
  return appAuth.signOut();
}
