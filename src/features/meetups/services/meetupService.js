import firebase from 'firebase/app';
import { appAuth, appFirestore } from '../../../firebase/appFirebase';

export function getMeetupsCollection() {
  return appFirestore.collection('meetups');
}

export function getMeetupDocument(id) {
  return getMeetupsCollection().doc(id);
}

export function addMeetupToFirestore(meetup) {
  const user = appAuth.currentUser;
  if (user) {
    return getMeetupsCollection().add({
      ...meetup,
      hostUid: user.uid,
      hostedBy: user.displayName,
      hostPhotoURL: user.photoURL || null,
      attendeeIds: firebase.firestore.FieldValue.arrayUnion(user.uid),
      attendees: firebase.firestore.FieldValue.arrayUnion({
        id: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL || null,
      }),
    });
  }
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

export function addUserAttendanceToFirestore(meetupId) {
  const user = appAuth.currentUser;
  if (user) {
    return getMeetupsCollection()
      .doc(meetupId)
      .update({
        attendeeIds: firebase.firestore.FieldValue.arrayUnion(user.uid),
        attendees: firebase.firestore.FieldValue.arrayUnion({
          id: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL || null,
        }),
      });
  }
}
