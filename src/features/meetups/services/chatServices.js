import { appAuth, appFirebase } from '../../../firebase/appFirebase';

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
    return appFirebase.database().ref(`chats/${meetupId}`).push(newComment);
  }
}
