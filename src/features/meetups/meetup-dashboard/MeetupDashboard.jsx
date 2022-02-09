import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { sampleData } from '../../../data/sampleData';
import { MeetupForm } from '../meetup-form/MeetupForm';
import { MeetupList } from './MeetupList';

export const MeetupDashboard = ({ formOpen, setFormOpen }) => {
  const [meetups, setMeetups] = useState(sampleData);

  return (
    <Row>
      <Col md={8}>
        <MeetupList meetups={meetups} />
      </Col>
      <Col md={4}>{formOpen && <MeetupForm setFormOpen={setFormOpen} />}</Col>
    </Row>
  );
};
