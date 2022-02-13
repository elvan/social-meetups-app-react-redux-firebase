import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ErrorComponent } from './components/errors/ErrorComponent';
import { ModalManager } from './components/modals/ModalManager';
import { AppNavbar } from './components/navbar/AppNavbar';
import { HomePage } from './features/home/HomePage';
import { MeetupDashboardPage } from './features/meetups/pages/meetup-dashboard/MeetupDashboardPage';
import { MeetupDetailsPage } from './features/meetups/pages/meetup-details/MeetupDetailsPage';
import { MeetupFormPage } from './features/meetups/pages/meetup-form/MeetupFormPage';
import { SandboxPage } from './features/sandbox/pages/SandboxPage';

export const App = () => {
  const { key } = useLocation();

  return (
    <div className='d-flex flex-column vh-100'>
      <ModalManager />
      <ToastContainer
        position='bottom-right'
        theme='colored'
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        rtl={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
                <Route path='/error' component={ErrorComponent} exact />
              </Switch>
            </Container>
          </Fragment>
        )}
      />
    </div>
  );
};
