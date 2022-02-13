import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorComponent } from '../../../../components/errors/ErrorComponent';
import { Loading } from '../../../../components/loading/Loading';
import { useDocument } from '../../../../hooks/useDocument';
import { getMeetupDocument } from '../../services/meetupFirestore';
import { listenToMeetups } from '../../store/meetupActions';
import { MeetupDetailsChat } from './components/MeetupDetailsChat';
import { MeetupDetailsHeader } from './components/MeetupDetailsHeader';
import { MeetupDetailsInfo } from './components/MeetupDetailsInfo';
import { MeetupDetailsSidebar } from './components/MeetupDetailsSidebar';

export const MeetupDetailsPage = ({ match }) => {
  const meetupId = match.params.id;
  const dispatch = useDispatch();

  // @ts-ignore
  const { pending, error, meetups } = useSelector((state) => state.meetupState);
  const meetup = meetups.find((meetup) => meetup.id === meetupId);

  useDocument({
    document: () => getMeetupDocument(meetupId),
    listen: (meetup) => dispatch(listenToMeetups([meetup])),
    deps: [meetupId],
  });

  if (pending) {
    return <Loading />;
  }

  if (error && !meetup) {
    return <ErrorComponent error={error} />;
  }

  return (
    <>
      {meetup && (
        <Row>
          <Col md={8}>
            <MeetupDetailsHeader meetup={meetup} />
            <MeetupDetailsInfo meetup={meetup} />
            <MeetupDetailsChat />
          </Col>
          <Col md={4}>
            <MeetupDetailsSidebar attendees={meetup.attendees} />
          </Col>
        </Row>
      )}
    </>
  );
};
