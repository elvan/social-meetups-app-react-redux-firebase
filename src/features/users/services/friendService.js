import firebase from 'firebase/app';
import { appAuth, appFirestore } from '../../../firebase/appFirebase';

export async function followUserInFirebase(profile) {
  const user = appAuth.currentUser;
  const batch = appFirestore.batch();
  if (user) {
    try {
      batch.set(
        appFirestore
          .collection('friends')
          .doc(user.uid)
          .collection('following')
          .doc(profile.id),
        {
          uid: profile.id,
          displayName: profile.displayName,
          photoURL: profile.photoURL,
          createdAt: new Date(),
        }
      );
      batch.set(
        appFirestore
          .collection('friends')
          .doc(profile.id)
          .collection('followers')
          .doc(user.uid),
        {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
          createdAt: new Date(),
        }
      );
      batch.update(appFirestore.collection('users').doc(user.uid), {
        followingCount: firebase.firestore.FieldValue.increment(1),
      });
      batch.update(appFirestore.collection('users').doc(profile.id), {
        followersCount: firebase.firestore.FieldValue.increment(1),
      });
      return batch.commit();
    } catch (error) {
      throw error;
    }
  }
}

export async function unfollowUserInFirebase(profile) {
  const user = appAuth.currentUser;
  const batch = appFirestore.batch();
  if (user) {
    try {
      batch.delete(
        appFirestore
          .collection('friends')
          .doc(user.uid)
          .collection('following')
          .doc(profile.id)
      );
      batch.delete(
        appFirestore
          .collection('friends')
          .doc(profile.id)
          .collection('followers')
          .doc(user.uid)
      );
      batch.update(appFirestore.collection('users').doc(user.uid), {
        followingCount: firebase.firestore.FieldValue.increment(-1),
      });
      batch.update(appFirestore.collection('users').doc(profile.id), {
        followersCount: firebase.firestore.FieldValue.increment(-1),
      });
      return batch.commit();
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
