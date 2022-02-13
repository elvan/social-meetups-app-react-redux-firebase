import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  meetupAsyncError,
  meetupAsyncFinish,
  meetupAsyncStart,
} from '../features/meetups/store/meetupActions';
import { dataFromSnapshot } from '../firebase/dataFromSnapshot';

export function useDocument({ document, listen, deps }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(meetupAsyncStart());
    const unsubscribe = document().onSnapshot(
      (snapshot) => {
        if (!snapshot.exists) {
          dispatch(
            meetupAsyncError({
              code: 'not-found',
              message: 'Document does not exist',
            })
          );
          return;
        }
        listen(dataFromSnapshot(snapshot));
        dispatch(meetupAsyncFinish());
      },
      (error) => {
        dispatch(meetupAsyncError(error));
      }
    );

    return () => {
      unsubscribe();
    };
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
