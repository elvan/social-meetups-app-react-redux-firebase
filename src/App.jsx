import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ErrorComponent } from './components/errors/ErrorComponent';
import { ModalManager } from './components/modals/ModalManager';
import { AppNavbar } from './components/navbar/AppNavbar';
import { AccountPage } from './features/auth/pages/AccountPage';
import { LoginPage } from './features/auth/pages/LoginPage';
import { RegisterPage } from './features/auth/pages/RegisterPage';
import { HomePage } from './features/home/HomePage';
import { MeetupCreatePage } from './features/meetups/pages/MeetupCreatePage';
import { MeetupDashboardPage } from './features/meetups/pages/MeetupDashboardPage';
import { MeetupDetailsPage } from './features/meetups/pages/MeetupDetailsPage';
import { MeetupUpdatePage } from './features/meetups/pages/MeetupUpdatePage';
import { SandboxPage } from './features/sandbox/pages/SandboxPage';
import { UserProfilePage } from './features/users/pages/UserProfilePage';

export const App = () => {
  const { ready } = useSelector((state) => state.authState);
  const { key } = useLocation();

  if (!ready) {
    return <span className='bg-warning py-1 px-2'>Loading...</span>;
  }

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
                  path='/create-meetup'
                  component={MeetupCreatePage}
                  exact
                />
                <Route
                  key={key}
                  path='/manage-meetup/:id'
                  component={MeetupUpdatePage}
                  exact
                />
                <Route path='/profiles/:id' component={UserProfilePage} exact />
                <Route path='/register' component={RegisterPage} exact />
                <Route path='/login' component={LoginPage} />
                <Route path='/account' component={AccountPage} exact />
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
