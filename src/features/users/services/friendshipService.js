import firebase from 'firebase/app';
import { appAuth, appFirestore } from '../../../firebase/appFirebase';

export async function followUserInFirebase(profile) {
  const user = appAuth.currentUser;
  if (user) {
    try {
      await appFirestore
        .collection('friendships')
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
        .collection('friendships')
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
        .collection('friendships')
        .doc(user.uid)
        .collection('following')
        .doc(profile.id)
        .delete();
      await appFirestore
        .collection('friendships')
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
