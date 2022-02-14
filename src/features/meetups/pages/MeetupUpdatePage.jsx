import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorComponent } from '../../../components/errors/ErrorComponent';
import { Loading } from '../../../components/loading/Loading';
import { useDocument } from '../../../hooks/useDocument';
import { MeetupForm } from '../components/MeetupForm';
import { getMeetupDocument } from '../services/meetupService';
import { listenToMeetups } from '../store/meetupActions';

export const MeetupUpdatePage = ({ history, match }) => {
  let storedMeetup;

  const id = match.params.id;
  const dispatch = useDispatch();

  const { pending, error, meetups } = useSelector((state) => state.meetupState);

  if (id) {
    storedMeetup = meetups.find((meetup) => meetup.id === id);
  }

  const documentMemo = useMemo(() => getMeetupDocument(id), [id]);

  const listenCallback = useCallback(
    (meetup) => {
      return dispatch(listenToMeetups([meetup]));
    },
    [dispatch]
  );

  useDocument({
    documentMemo: documentMemo,
    listenCallback: listenCallback,
  });

  if (pending) {
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
