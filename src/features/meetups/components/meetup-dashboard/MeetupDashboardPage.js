import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { sampleData } from '../../data/sampleData';
import { MeetupFormPage } from '../meetup-form/MeetupFormPage';
import { MeetupList } from './MeetupList';

export const MeetupDashboardPage = ({
  formOpen,
  setFormOpen,
  selectMeetup,
  selectedMeetup,
}) => {
  const [meetups, setMeetups] = useState(sampleData);

  const handleCreateMeetup = (meetup) => {
    setMeetups([...meetups, meetup]);
  };

  const handleUpdateMeetup = (updatedMeetup) => {
    setMeetups(
      meetups.map((meetup) =>
        meetup.id === updatedMeetup.id ? updatedMeetup : meetup
      )
    );
    selectMeetup(null);
  };

  const handleDeleteMeetup = (id) => {
    setMeetups(meetups.filter((meetup) => meetup.id !== id));
    selectMeetup(null);
    setFormOpen(false);
  };

  return (
    <Row>
      <Col md={8}>
        <MeetupList
          meetups={meetups}
          selectMeetup={selectMeetup}
          deleteMeetup={handleDeleteMeetup}
        />
      </Col>
      <Col md={4}>
        {formOpen && (
          <MeetupFormPage
            key={selectedMeetup ? selectedMeetup.id : 'new'}
            setFormOpen={setFormOpen}
            createMeetup={handleCreateMeetup}
            selectedMeetup={selectedMeetup}
            updateMeetup={handleUpdateMeetup}
          />
        )}
      </Col>
    </Row>
  );
};
