import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../async/asyncActions';
import { dataFromSnapshot } from '../firebase/dataFromSnapshot';

export function useFirestoreCollection({ queryMemo, listenCallback }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncActionStart());
    queryMemo
      .get()
      .then((snapshot) => {
        const docs = snapshot.docs.map(dataFromSnapshot);
        listenCallback(docs);
        dispatch(asyncActionFinish());
      })
      .catch((error) => {
        dispatch(asyncActionError(error));
      });

    return () => {};
  }, [dispatch, queryMemo, listenCallback]);
}
