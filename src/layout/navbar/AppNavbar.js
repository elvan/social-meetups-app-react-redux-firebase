import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaUsers } from 'react-icons/fa';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { LoggedInMenu } from './LoggedInMenu';
import { LoggedOutMenu } from './LoggedOutMenu';

export const AppNavbar = () => {
  const [authenticated, setAuthenticated] = useState(true);

  const history = useHistory();

  const handleLogout = () => {
    setAuthenticated(false);
    history.push('/');
  };

  return (
    <Navbar
      collapseOnSelect
      className='mb-3 shadow'
      expand='md'
      bg='primary'
      variant='dark'
    >
      <Container fluid='lg'>
        <Navbar.Brand as={Link} to='/'>
          <div className='d-flex align-items-center'>
            <FaUsers size={18.75} className='mr-2' />
            SocialMeetups
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={NavLink} to='/meetups'>
              All Meetups
            </Nav.Link>
            {authenticated && (
              <Nav.Link as={NavLink} to='/create-meetup'>
                Create Meetup
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {authenticated && <LoggedInMenu handleLogout={handleLogout} />}
            {!authenticated && (
              <LoggedOutMenu setAuthenticated={setAuthenticated} />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
