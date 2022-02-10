import { Col, Row } from 'react-bootstrap';
import { MeetupDetailsChat } from './components/MeetupDetailsChat';
import { MeetupDetailsHeader } from './components/MeetupDetailsHeader';
import { MeetupDetailsInfo } from './components/MeetupDetailsInfo';
import { MeetupDetailsSidebar } from './components/MeetupDetailsSidebar';

export const MeetupDetailsPage = () => {
  return (
    <Row>
      <Col md={8}>
        <MeetupDetailsHeader />
        <MeetupDetailsInfo />
        <MeetupDetailsChat />
      </Col>
      <Col md={4}>
        <MeetupDetailsSidebar />
      </Col>
    </Row>
  );
};
