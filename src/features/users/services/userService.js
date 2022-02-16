import firebase from 'firebase/app';
import { appAuth, appFirestore } from '../../../firebase/appFirebase';

export function getUsersCollection() {
  return appFirestore.collection('users');
}

export function getUserProfileDocument(id) {
  return appFirestore.collection('users').doc(id);
}

export function getUserPhotosCollection(id) {
  return appFirestore.collection('users').doc(id).collection('photos');
}

export function setUserProfileInFirebase(user) {
  return appFirestore
    .collection('users')
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

export async function updateUserProfilePhotoInFirebase(downloadURL, filename) {
  const user = appAuth.currentUser;
  try {
    if (user) {
      const userDocRef = getUsersCollection().doc(user.uid);
      const userDoc = await userDocRef.get();
      const userData = userDoc.data();
      if (userData) {
        if (!userData.photoURL) {
          await getUsersCollection().doc(user.uid).update({
            photoURL: downloadURL,
          });
          await user.updateProfile({
            photoURL: downloadURL,
          });
        }
        return await getUserPhotosCollection(user.uid).add({
          name: filename,
          url: downloadURL,
        });
      }
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    throw error;
  }
}

export async function setMainPhotoInFirebase(photo) {
  const user = appAuth.currentUser;
  try {
    if (user) {
      await getUserProfileDocument(user.uid).update({
        photoURL: photo.url,
      });
      return user.updateProfile({
        photoURL: photo.url,
      });
    }
  } catch (error) {
    throw error;
  }
}

export async function deletePhotoFromFirestore(photoId) {
  const user = appAuth.currentUser;
  if (user) {
    return getUserPhotosCollection(user.uid).doc(photoId).delete();
  }
}
