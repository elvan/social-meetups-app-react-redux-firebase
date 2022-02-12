import { appFirestore } from '../../../firebase/appFirebase';

export function getMeetupsCollection() {
  return appFirestore.collection('meetups');
}
