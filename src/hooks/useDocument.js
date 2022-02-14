import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../async/asyncActions';
import { dataFromSnapshot } from '../firebase/dataFromSnapshot';

export function useDocument({ document, listen, deps }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncActionStart());
    const unsubscribe = document().onSnapshot(
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

        listen(dataFromSnapshot(snapshot));
        dispatch(asyncActionFinish());
      },
      (error) => {
        dispatch(asyncActionError(error));
      }
    );

    return () => {
      unsubscribe();
    };
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
