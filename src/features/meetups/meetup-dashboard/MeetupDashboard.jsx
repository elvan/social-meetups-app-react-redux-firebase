import { Col, Row } from 'react-bootstrap';

export const MeetupDashboard = () => {
  return (
    <Row>
      <Col md={8}>
        <h2>Left Column</h2>
      </Col>
      <Col md={4}>
        <h3>Right Column</h3>
      </Col>
    </Row>
  );
};
