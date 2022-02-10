import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { MeetupDetailsChat } from './components/MeetupDetailsChat';
import { MeetupDetailsHeader } from './components/MeetupDetailsHeader';
import { MeetupDetailsInfo } from './components/MeetupDetailsInfo';
import { MeetupDetailsSidebar } from './components/MeetupDetailsSidebar';

export const MeetupDetailsPage = ({ match }) => {
  const meetup = useSelector((state) =>
    // @ts-ignore
    state.meetupState.meetups.find((meetup) => meetup.id === match.params.id)
  );

  return (
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
  );
};
