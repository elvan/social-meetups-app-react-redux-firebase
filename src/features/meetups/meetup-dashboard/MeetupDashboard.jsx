import { Col, Row } from 'react-bootstrap';
import { MeetupForm } from '../meetup-form/MeetupForm';
import { MeetupList } from './MeetupList';

export const MeetupDashboard = () => {
  return (
    <Row>
      <Col md={8}>
        <MeetupList />
      </Col>
      <Col md={4}>
        <MeetupForm />
      </Col>
    </Row>
  );
};
