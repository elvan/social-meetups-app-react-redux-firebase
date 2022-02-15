import firebase from 'firebase/app';
import { appAuth } from '../../../firebase/appFirebase';

export function socialLoginUserWithFirebase() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return appAuth.signInWithPopup(provider);
}

export function registerUserToFirebase(credentials) {
  return appAuth.createUserWithEmailAndPassword(
    credentials.email,
    credentials.password
  );
}

export function loginUserToFirebase(credentials) {
  return appAuth.signInWithEmailAndPassword(
    credentials.email,
    credentials.password
  );
}

export function logoutUserFromFirebase() {
  return appAuth.signOut();
}

export function updatePasswordInFirebase(credentials) {
  return appAuth.currentUser?.updatePassword(credentials.newPassword1);
}
