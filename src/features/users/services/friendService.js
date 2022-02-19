import firebase from 'firebase/app';
import { appAuth, appFirestore } from '../../../firebase/appFirebase';

export async function followUserInFirebase(profile) {
  const user = appAuth.currentUser;
  if (user) {
    try {
      await appFirestore
        .collection('friends')
        .doc(user.uid)
        .collection('following')
        .doc(profile.id)
        .set({
          uid: profile.id,
          displayName: profile.displayName,
          photoURL: profile.photoURL,
          createdAt: new Date(),
        });
      await appFirestore
        .collection('friends')
        .doc(profile.id)
        .collection('followers')
        .doc(user.uid)
        .set({
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
          createdAt: new Date(),
        });
      await appFirestore
        .collection('users')
        .doc(user.uid)
        .update({
          followingCount: firebase.firestore.FieldValue.increment(1),
        });
      return appFirestore
        .collection('users')
        .doc(profile.id)
        .update({
          followersCount: firebase.firestore.FieldValue.increment(1),
        });
    } catch (error) {
      throw error;
    }
  }
}

export async function unfollowUserInFirebase(profile) {
  const user = appAuth.currentUser;
  if (user) {
    try {
      await appFirestore
        .collection('friends')
        .doc(user.uid)
        .collection('following')
        .doc(profile.id)
        .delete();
      await appFirestore
        .collection('friends')
        .doc(profile.id)
        .collection('followers')
        .doc(user.uid)
        .delete();
      await appFirestore
        .collection('users')
        .doc(user.uid)
        .update({
          followingCount: firebase.firestore.FieldValue.increment(-1),
        });
      return appFirestore
        .collection('users')
        .doc(profile.id)
        .update({
          followersCount: firebase.firestore.FieldValue.increment(-1),
        });
    } catch (error) {
      throw error;
    }
  }
}

export function getFollowersCollection(profileId) {
  return appFirestore
    .collection('friends')
    .doc(profileId)
    .collection('followers');
}

export function getFollowingCollection(profileId) {
  return appFirestore
    .collection('friends')
    .doc(profileId)
    .collection('following');
}

export function getFollowingDocument(profileId) {
  const userId = appAuth.currentUser?.uid;
  return appFirestore
    .collection('friends')
    .doc(userId)
    .collection('following')
    .doc(profileId)
    .get();
}
