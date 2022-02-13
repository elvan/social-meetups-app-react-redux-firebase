import cuid from 'cuid';
import firebase from 'firebase/app';
import { appFirestore } from '../../../firebase/appFirebase';

export function getMeetupsCollection() {
  return appFirestore.collection('meetups');
}

export function getMeetupDocument(meetupId) {
  return getMeetupsCollection().doc(meetupId);
}

export function addMeetupToFirestore(meetup) {
  return getMeetupsCollection().add(createSampleMeetup(meetup));
}

export function updateMeetupInFirestore(meetup) {
  return getMeetupsCollection().doc(meetup.id).update(meetup);
}

export function deleteMeetupInFirestore(meetupId) {
  return getMeetupsCollection().doc(meetupId).delete();
}

function createSampleMeetup(meetup) {
  return {
    ...meetup,
    hostedBy: 'Aaron',
    hostPhotoUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    attendees: firebase.firestore.FieldValue.arrayUnion({
      id: cuid(),
      displayName: 'Tom',
      photoUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    }),
  };
}
