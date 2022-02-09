import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { MeetupDashboard } from './features/meetups/meetup-dashboard/MeetupDashboard';
import { AppNavbar } from './layout/AppNavbar';

export const App = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedMeetup, setSelectedMeetup] = useState(null);

  const handleSelectMeetup = (meetup) => {
    setSelectedMeetup(meetup);
    setFormOpen(true);
  };

  const handleCreateFormOpen = () => {
    setSelectedMeetup(null);
    setFormOpen(true);
  };

  return (
    <div className='vh-100'>
      <AppNavbar formOpen={formOpen} setFormOpen={handleCreateFormOpen} />
      <Container fluid='lg'>
        <MeetupDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectMeetup={handleSelectMeetup}
          selectedMeetup={selectedMeetup}
        />
      </Container>
    </div>
  );
};
