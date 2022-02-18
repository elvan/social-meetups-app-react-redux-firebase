import { appAuth, appDatabase } from '../../../firebase/appFirebase';

export function addMeetupChatComment(meetupId, comment) {
  const user = appAuth.currentUser;
  if (user) {
    const newComment = {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: comment,
      date: Date.now(),
    };
    return appDatabase.ref(`chats/${meetupId}`).push(newComment);
  }
}

export function getMeetupCommentsRef(meetupId) {
  return appDatabase.ref(`chats/${meetupId}`).orderByKey();
}

export function databaseObjectToArray(snapshot) {
  if (snapshot) {
    return Object.entries(snapshot).map(([key, value]) => ({
      ...value,
      id: key,
    }));
  }
}
