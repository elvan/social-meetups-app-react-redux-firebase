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

export function logoutFromFirebase() {
  return appAuth.signOut();
}
