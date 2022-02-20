const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const firestore = admin.firestore();

exports.addFollowing = functions.firestore
  .document('friends/{userUid}/following/{profileId}')
  .onCreate(async (snapshot, context) => {
    try {
      const userDoc = await firestore
        .doc(`users/${context.params.userUid}`)
        .get();
      const batch = firestore.batch();

      batch.set(
        firestore
          .collection('friends')
          .doc(context.params.profileId)
          .collection('followers')
          .doc(context.params.userUid),
        {
          uid: context.params.userUid,
          displayName: userDoc.data().displayName,
          photoURL: userDoc.data().photoURL,
        }
      );

      batch.update(
        firestore.collection('users').doc(context.params.profileId),
        {
          followersCount: admin.firestore.FieldValue.increment(1),
        }
      );

      return batch.commit();
    } catch (error) {
      return console.log(error);
    }
  });

exports.removeFollowing = functions.firestore
  .document('friends/{userUid}/following/{profileId}')
  .onDelete(async (snapshot, context) => {
    try {
      const batch = firestore.batch();

      batch.delete(
        firestore
          .collection('friends')
          .doc(context.params.profileId)
          .collection('followers')
          .doc(context.params.userUid)
      );

      batch.update(
        firestore.collection('users').doc(context.params.profileId),
        {
          followersCount: admin.firestore.FieldValue.increment(-1),
        }
      );

      return batch.commit();
    } catch (error) {
      return console.log(error);
    }
  });
