import { appAuth } from '../../../firebase/appFirebase';

export function loginWithCredentialsToFirebase(credentials) {
  return appAuth.signInWithEmailAndPassword(
    credentials.email,
    credentials.password
  );
}
