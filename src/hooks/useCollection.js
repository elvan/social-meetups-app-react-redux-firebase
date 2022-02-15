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
    // TODO: fix the loading state. Move to each component or reducer
    dispatch(asyncActionStart());
    const unsubscribe = collectionMemo.onSnapshot(
      (snapshot) => {
        const docs = snapshot.docs.map(dataFromSnapshot);
        listenCallback(docs);
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
