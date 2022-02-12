import { projectFirestore } from '../../../firebase/projectFirebase';

export function fetchMeetupsFromFirestore(observer) {
  return projectFirestore.collection('meetups').onSnapshot(observer);
}
