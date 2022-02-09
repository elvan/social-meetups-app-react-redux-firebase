import { Col, Row } from 'react-bootstrap';
import { MeetupList } from './MeetupList';

export const MeetupDashboard = () => {
  return (
    <Row>
      <Col md={9}>
        <MeetupList />
      </Col>
      <Col md={3}>
        <h3>Right Column</h3>
      </Col>
    </Row>
  );
};
