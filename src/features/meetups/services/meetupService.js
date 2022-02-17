import firebase from 'firebase/app';
import { appAuth, appFirestore } from '../../../firebase/appFirebase';

export function getMeetupsCollection(predicate) {
  let meetupsRef = appFirestore.collection('meetups').orderBy('date');
  const user = appAuth.currentUser;
  switch (predicate.get('filter')) {
    case 'isGoing':
      return meetupsRef
        .where('attendeeIds', 'array-contains', user?.uid)
        .where('date', '>=', predicate.get('startDate'));
    case 'isHosting':
      return meetupsRef
        .where('hostUid', '==', user?.uid)
        .where('date', '>=', predicate.get('startDate'));
    default:
      return meetupsRef.where('date', '>=', predicate.get('startDate'));
  }
}

export function getMeetupDocument(id) {
  return appFirestore.collection('meetups').doc(id);
}

export function addMeetupToFirestore(meetup) {
  const user = appAuth.currentUser;
  if (user) {
    return appFirestore.collection('meetups').add({
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
  return appFirestore.collection('meetups').doc(meetup.id).update(meetup);
}

export function deleteMeetupInFirestore(id) {
  return appFirestore.collection('meetups').doc(id).delete();
}

export function toggleMeetupCancelInFirestore(meetup) {
  return appFirestore.collection('meetups').doc(meetup.id).update({
    isCancelled: !meetup.isCancelled,
  });
}

export function addUserAttendanceToFirestore(meetupId) {
  const user = appAuth.currentUser;
  if (user) {
    return appFirestore
      .collection('meetups')
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

export async function removeUserAttendanceFromFirestore(meetupId) {
  const user = appAuth.currentUser;
  if (user) {
    try {
      const meetupDoc = await appFirestore
        .collection('meetups')
        .doc(meetupId)
        .get();
      return appFirestore
        .collection('meetups')
        .doc(meetupId)
        .update({
          attendeeIds: firebase.firestore.FieldValue.arrayRemove(user.uid),
          attendees: meetupDoc
            .data()
            .attendees.filter((attendee) => attendee.id !== user.uid),
        });
    } catch (error) {
      throw error;
    }
  }
}
