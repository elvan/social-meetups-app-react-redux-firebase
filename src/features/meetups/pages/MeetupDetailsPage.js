import { useCallback, useMemo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorComponent } from '../../../components/errors/ErrorComponent';
import { Loading } from '../../../components/loading/Loading';
import { useDocument } from '../../../hooks/useDocument';
import { MeetupDetailsChat } from '../components/MeetupDetailsChat';
import { MeetupDetailsHeader } from '../components/MeetupDetailsHeader';
import { MeetupDetailsInfo } from '../components/MeetupDetailsInfo';
import { MeetupDetailsSidebar } from '../components/MeetupDetailsSidebar';
import { getMeetupDocument } from '../services/meetupService';
import { listenToMeetups } from '../store/meetupActions';

export const MeetupDetailsPage = ({ match }) => {
  const meetupId = match.params.id;
  const dispatch = useDispatch();

  const { pending, error, meetups } = useSelector((state) => state.meetupState);
  const meetup = meetups.find((meetup) => meetup.id === meetupId);

  const documentMemo = useMemo(() => getMeetupDocument(meetupId), [meetupId]);

  const listenCallback = useCallback(
    (meetup) => {
      return dispatch(listenToMeetups([meetup]));
    },
    [dispatch]
  );

  useDocument({
    document: documentMemo,
    listen: listenCallback,
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
