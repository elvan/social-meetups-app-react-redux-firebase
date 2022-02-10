import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './features/home/HomePage';
import { MeetupDashboardPage } from './features/meetups/components/meetup-dashboard/MeetupDashboardPage';
import { MeetupDetailsPage } from './features/meetups/components/meetup-details/MeetupDetailsPage';
import { MeetupFormPage } from './features/meetups/components/meetup-form/MeetupFormPage';
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
          <Route path='/meetups' component={MeetupDashboardPage} exact />
          <Route path='/meetups/:id' component={MeetupDetailsPage} exact />
          <Route path='/create-meetup' component={MeetupFormPage} exact />
        </Switch>
      </Container>
    </div>
  );
};
