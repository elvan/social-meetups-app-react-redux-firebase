import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../async/asyncActions';
import { dataFromSnapshot } from '../firebase/dataFromSnapshot';

export function useFirestoreDocument({ documentMemo, listenCallback }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncActionStart());
    const unsubscribe = documentMemo.onSnapshot(
      (snapshot) => {
        if (!snapshot.exists) {
          dispatch(
            asyncActionError({
              code: 'not-found',
              message: 'Document does not exist',
            })
          );
          return;
        }

        listenCallback(dataFromSnapshot(snapshot));
        dispatch(asyncActionFinish());
      },
      (error) => {
        dispatch(asyncActionError(error));
      }
    );

    return () => {
      unsubscribe();
    };
  }, [dispatch, documentMemo, listenCallback]);
}
