import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  meetupAsyncError,
  meetupAsyncFinish,
  meetupAsyncStart,
} from '../features/meetups/store/meetupActions';
import { dataFromSnapshot } from '../firebase/dataFromSnapshot';

export function useFirestoreCollection({ collection, listen }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(meetupAsyncStart());
    const unsubscribe = collection().onSnapshot(
      (snapshot) => {
        listen(snapshot.docs.map(dataFromSnapshot));
        dispatch(meetupAsyncFinish());
      },
      (error) => {
        dispatch(meetupAsyncError(error));
      }
    );

    return () => {
      unsubscribe();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
