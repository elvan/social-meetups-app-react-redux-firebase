import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch, useLocation } from 'react-router-dom';
import { HomePage } from './features/home/HomePage';
import { MeetupDashboardPage } from './features/meetups/pages/meetup-dashboard/MeetupDashboardPage';
import { MeetupDetailsPage } from './features/meetups/pages/meetup-details/MeetupDetailsPage';
import { MeetupFormPage } from './features/meetups/pages/meetup-form/MeetupFormPage';
import { SandboxPage } from './features/sandbox/pages/SandboxPage';
import { AppNavbar } from './layout/navbar/AppNavbar';

export const App = () => {
  const { key } = useLocation();

  return (
    <div className='d-flex flex-column vh-100'>
      <Route path='/' component={HomePage} exact />
      <Route
        path={'/(.+)'}
        render={() => (
          <Fragment>
            <AppNavbar />
            <Container fluid='lg'>
              <Switch>
                <Route path='/meetups' component={MeetupDashboardPage} exact />
                <Route
                  path='/meetups/:id'
                  component={MeetupDetailsPage}
                  exact
                />
                <Route
                  key={key}
                  path={['/create-meetup', '/manage-meetup/:id']}
                  component={MeetupFormPage}
                  exact
                />
                <Route path='/sandbox' component={SandboxPage} exact />
              </Switch>
            </Container>
          </Fragment>
        )}
      />
    </div>
  );
};
