import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { MeetupDashboard } from './features/meetups/meetup-dashboard/MeetupDashboard';
import { AppNavbar } from './layout/AppNavbar';

export const App = () => {
  const [formOpen, setFormOpen] = useState(true);

  return (
    <div className='vh-100'>
      <AppNavbar formOpen={formOpen} setFormOpen={setFormOpen} />
      <Container fluid='lg'>
        <MeetupDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </div>
  );
};
