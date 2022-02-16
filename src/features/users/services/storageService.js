import { appAuth, appStorage } from '../../../firebase/appFirebase';

export function uploadFileToStorage(file, filename) {
  const user = appAuth.currentUser;
  if (user) {
    const storageRef = appStorage.ref();
    return storageRef.child(`${user.uid}/user_images/${filename}`).put(file);
  }
}

export function deleteFileFromStorage(filename) {
  const user = appAuth.currentUser;
  if (user) {
    const storageRef = appStorage.ref();
    return storageRef.child(`${user.uid}/user_images/${filename}`).delete();
  }
}
