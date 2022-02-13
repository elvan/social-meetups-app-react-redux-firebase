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

function createSampleMeetup(meetup) {
  return {
    ...meetup,
    hostedBy: 'Tom',
    hostPhotoUrl: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: firebase.firestore.FieldValue.arrayUnion({
      id: cuid(),
      displayName: 'Tom',
      photoUrl: 'https://randomuser.me/api/portraits/men/22.jpg',
    }),
  };
}
