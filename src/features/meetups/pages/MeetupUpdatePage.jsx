import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorComponent } from '../../../components/errors/ErrorComponent';
import { Loading } from '../../../components/loading/Loading';
import { useFirestoreDocument } from '../../../hooks/useFirestoreDocument';
import { MeetupForm } from '../components/MeetupForm';
import { getMeetupDocument } from '../services/meetupService';
import { listMeetups } from '../store/meetupActions';

export const MeetupUpdatePage = ({ history, match }) => {
  let storedMeetup;

  const id = match.params.id;
  const dispatch = useDispatch();

  // @ts-ignore
  const { loading, error, meetups } = useSelector((state) => state.meetupState);

  if (id) {
    storedMeetup = meetups.find((meetup) => meetup.id === id);
  }

  const documentMemo = useMemo(() => getMeetupDocument(id), [id]);

  const listenCallback = useCallback(
    (meetup) => {
      return dispatch(listMeetups([meetup]));
    },
    [dispatch]
  );

  useFirestoreDocument({
    documentMemo: documentMemo,
    listenCallback: listenCallback,
  });

  if (loading) {
    return <Loading />;
  }

  if (id && error && !storedMeetup) {
    return <ErrorComponent error={error} />;
  }

  return (
    <>
      {storedMeetup && <MeetupForm meetup={storedMeetup} history={history} />}
    </>
  );
};
