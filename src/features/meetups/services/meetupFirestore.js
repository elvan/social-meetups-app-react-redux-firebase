import { appFirestore } from '../../../firebase/appFirebase';

export function getMeetupsCollection() {
  return appFirestore.collection('meetups');
}

export function getMeetupDocument(meetupId) {
  return getMeetupsCollection().doc(meetupId);
}
