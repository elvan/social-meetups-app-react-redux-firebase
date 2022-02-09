import { Container } from 'react-bootstrap';
import { MeetupDashboard } from './features/meetups/meetup-dashboard/MeetupDashboard';

export const App = () => {
  return (
    <Container fluid='lg' className='vh-100'>
      <h1>SocialMeetups</h1>
      <MeetupDashboard />
    </Container>
  );
};
