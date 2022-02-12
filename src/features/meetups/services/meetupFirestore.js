import { appFirestore } from '../../../firebase/appFirebase';

export function fetchMeetupsFromFirestore(observer) {
  return appFirestore.collection('meetups').onSnapshot(observer);
}
