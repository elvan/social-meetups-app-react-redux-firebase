import { useDispatch, useSelector } from 'react-redux';
import { ErrorComponent } from '../../../../components/errors/ErrorComponent';
import { Loading } from '../../../../components/loading/Loading';
import { useDocument } from '../../../../hooks/useDocument';
import { MeetupForm } from '../../components/MeetupForm';
import { getMeetupDocument } from '../../services/meetupFirestore';
import { listenToMeetups } from '../../store/meetupActions';

export const MeetupUpdatePage = ({ history, match }) => {
  const meetupId = match.params.id;
  const dispatch = useDispatch();

  // @ts-ignore
  const { pending, error, meetups } = useSelector((state) => state.meetupState);

  let storedMeetup;

  if (meetupId) {
    storedMeetup = meetups.find((meetup) => meetup.id === meetupId);
  }

  useDocument({
    document: () => getMeetupDocument(meetupId),
    listen: (meetup) => dispatch(listenToMeetups([meetup])),
    deps: [meetupId],
  });

  if (pending) {
    return <Loading />;
  }

  if (error && meetupId && !storedMeetup) {
    return <ErrorComponent error={error} />;
  }

  return <MeetupForm meetup={storedMeetup} history={history} />;
};
