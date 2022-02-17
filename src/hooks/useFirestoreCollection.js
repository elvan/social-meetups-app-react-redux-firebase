import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../async/asyncActions';
import { dataFromSnapshot } from '../firebase/dataFromSnapshot';

export function useFirestoreCollection({ collectionMemo, listenCallback }) {
  const dispatch = useDispatch();

  const [unmounted, setUnmounted] = useState(false);

  useEffect(() => {
    dispatch(asyncActionStart());
    collectionMemo
      .get()
      .then((snapshot) => {
        const docs = snapshot.docs.map(dataFromSnapshot);
        listenCallback(docs);
        dispatch(asyncActionFinish());
      })
      .catch((error) => {
        dispatch(asyncActionError(error));
      });

    return () => {
      setUnmounted(true);
    };
  }, [dispatch, collectionMemo, listenCallback]);
}
