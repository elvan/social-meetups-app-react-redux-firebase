import cuid from 'cuid';
import firebase from 'firebase/app';
import { appFirestore } from '../../../firebase/appFirebase';

export function getMeetupsCollection() {
  return appFirestore.collection('meetups');
}

export function getMeetupDocument(id) {
  return getMeetupsCollection().doc(id);
}

export function addMeetupToFirestore(meetup) {
  return getMeetupsCollection().add(createSampleMeetup(meetup));
}

export function updateMeetupInFirestore(meetup) {
  return getMeetupsCollection().doc(meetup.id).update(meetup);
}

export function deleteMeetupInFirestore(id) {
  return getMeetupsCollection().doc(id).delete();
}

export function toggleMeetupCancelInFirestore(meetup) {
  return getMeetupsCollection().doc(meetup.id).update({
    isCancelled: !meetup.isCancelled,
  });
}

function createSampleMeetup(meetup) {
  return {
    ...meetup,
    hostedBy: 'Aaron',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    attendees: firebase.firestore.FieldValue.arrayUnion({
      id: cuid(),
      displayName: 'Tom',
      photoURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    }),
  };
}
