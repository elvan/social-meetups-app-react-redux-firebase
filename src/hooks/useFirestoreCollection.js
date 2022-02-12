import { useEffect, useState } from 'react';
import { dataFromSnapshot } from '../firebase/dataFromSnapshot';

export function useFirestoreCollection({ collection, data }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setPending(true);
    const unsubscribe = collection().onSnapshot(
      (snapshot) => {
        data(snapshot.docs.map(dataFromSnapshot));
        setPending(false);
      },
      (error) => {
        setError(error);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    pending,
    error,
  };
}
