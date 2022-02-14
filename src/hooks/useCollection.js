import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../async/asyncActions';
import { dataFromSnapshot } from '../firebase/dataFromSnapshot';

export function useCollection({ collectionMemo, listenCallback }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncActionStart());
    const unsubscribe = collectionMemo.orderBy('date', 'asc').onSnapshot(
      (snapshot) => {
        listenCallback(snapshot.docs.map(dataFromSnapshot));
        dispatch(asyncActionFinish());
      },
      (error) => {
        dispatch(asyncActionError(error));
      }
    );

    return () => {
      unsubscribe();
    };
  }, [dispatch, collectionMemo, listenCallback]);
}
