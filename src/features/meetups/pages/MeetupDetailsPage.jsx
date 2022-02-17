import { useCallback, useMemo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorComponent } from '../../../components/errors/ErrorComponent';
import { Loading } from '../../../components/loading/Loading';
import { useFirestoreDocument } from '../../../hooks/useFirestoreDocument';
import { MeetupDetailsChat } from '../components/MeetupDetailsChat';
import { MeetupDetailsHeader } from '../components/MeetupDetailsHeader';
import { MeetupDetailsInfo } from '../components/MeetupDetailsInfo';
import { MeetupDetailsSidebar } from '../components/MeetupDetailsSidebar';
import { getMeetupDocument } from '../services/meetupService';
import { listMeetups } from '../store/meetupActions';

export const MeetupDetailsPage = ({ match }) => {
  const id = match.params.id;
  const dispatch = useDispatch();

  const { loading, error, meetups } = useSelector((state) => state.meetupState);
  const { currentUser } = useSelector((state) => state.authState);

  const meetup = meetups.find((meetup) => meetup.id === id);
  const isHost = meetup?.hostUid === currentUser?.uid;
  const isGoing = meetup?.attendees.some(
    (attendee) => attendee.id === currentUser?.uid
  );

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

  if (error && !meetup) {
    return <ErrorComponent error={error} />;
  }

  return (
    <>
      {meetup && (
        <Row>
          <Col md={8}>
            <MeetupDetailsHeader
              meetup={meetup}
              isHost={isHost}
              isGoing={isGoing}
            />
            <MeetupDetailsInfo meetup={meetup} />
            <MeetupDetailsChat meetupId={meetup.id} />
          </Col>
          <Col md={4}>
            <MeetupDetailsSidebar
              attendees={meetup.attendees}
              hostUid={meetup.hostUid}
            />
          </Col>
        </Row>
      )}
    </>
  );
};
