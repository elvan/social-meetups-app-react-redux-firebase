import { Container } from 'react-bootstrap';
import { MeetupDashboard } from './features/meetups/meetup-dashboard/MeetupDashboard';
import { AppNavbar } from './layout/AppNavbar';

export const App = () => {
  return (
    <div className='vh-100'>
      <AppNavbar />
      <Container fluid='lg'>
        <MeetupDashboard />
      </Container>
    </div>
  );
};
