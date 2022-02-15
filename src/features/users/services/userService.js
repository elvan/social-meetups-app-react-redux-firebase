import firebase from 'firebase/app';
import { appAuth, appFirestore } from '../../../firebase/appFirebase';

export function getUsersCollection() {
  return appFirestore.collection('users');
}

export function getUserProfileInFirebase(id) {
  return getUsersCollection().doc(id);
}

export function setUserProfileInFirebase(user) {
  return getUsersCollection()
    .doc(user.uid)
    .set({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL || null,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
}

export async function updateUserProfileInFirebase(profile) {
  const user = appAuth.currentUser;
  try {
    if (user) {
      if (user.displayName !== profile.displayName) {
        await user.updateProfile({
          displayName: profile.displayName,
        });
      }
      return getUsersCollection().doc(user.uid).update(profile);
    }
  } catch (error) {
    throw error;
  }
}
