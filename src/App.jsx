import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './features/home/HomePage';
import { MeetupDashboard } from './features/meetups/meetup-dashboard/MeetupDashboard';
import { MeetupDetails } from './features/meetups/meetup-details/MeetupDetails';
import { MeetupForm } from './features/meetups/meetup-form/MeetupForm';
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
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/meetups' component={MeetupDashboard} />
          <Route path='/meetups/:id' component={MeetupDetails} />
          <Route path='/create-meetup' component={MeetupForm} />
        </Switch>
      </Container>
    </div>
  );
};
