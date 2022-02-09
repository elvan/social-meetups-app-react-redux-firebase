import { Col, Row } from 'react-bootstrap';
import { sampleData } from '../../../data/sampleData';
import { MeetupForm } from '../meetup-form/MeetupForm';
import { MeetupList } from './MeetupList';

export const MeetupDashboard = () => {
  return (
    <Row>
      <Col md={8}>
        <MeetupList meetups={sampleData} />
      </Col>
      <Col md={4}>
        <MeetupForm />
      </Col>
    </Row>
  );
};
