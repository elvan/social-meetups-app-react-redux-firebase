import firebase from 'firebase/app';
import { appFirestore } from '../../../firebase/appFirebase';

export function getUsersCollection() {
  return appFirestore.collection('users');
}

export function setUserProfileData(user) {
  return getUsersCollection()
    .doc(user.uid)
    .set({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL || null,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
}
