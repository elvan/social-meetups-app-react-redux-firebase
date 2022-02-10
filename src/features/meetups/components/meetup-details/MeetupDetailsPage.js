import { Col, Row } from 'react-bootstrap';
import { MeetupDetailsChat } from './MeetupDetailsChat';
import { MeetupDetailsHeader } from './MeetupDetailsHeader';
import { MeetupDetailsInfo } from './MeetupDetailsInfo';
import { MeetupDetailsSidebar } from './MeetupDetailsSidebar';

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
