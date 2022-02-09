import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { sampleData } from '../../../data/sampleData';
import { MeetupForm } from '../meetup-form/MeetupForm';
import { MeetupList } from './MeetupList';

export const MeetupDashboard = ({
  formOpen,
  setFormOpen,
  selectMeetup,
  selectedMeetup,
}) => {
  const [meetups, setMeetups] = useState(sampleData);

  const handleCreateMeetup = (meetup) => {
    setMeetups([...meetups, meetup]);
  };

  return (
    <Row>
      <Col md={8}>
        <MeetupList meetups={meetups} selectMeetup={selectMeetup} />
      </Col>
      <Col md={4}>
        {formOpen && (
          <MeetupForm
            key={selectedMeetup ? selectedMeetup.id : 'new'}
            setFormOpen={setFormOpen}
            setMeetups={setMeetups}
            handleCreateMeetup={handleCreateMeetup}
            selectedMeetup={selectedMeetup}
          />
        )}
      </Col>
    </Row>
  );
};
