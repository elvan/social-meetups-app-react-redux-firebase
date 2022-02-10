import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { LoggedInMenu } from './LoggedInMenu';
import { LoggedOutMenu } from './LoggedOutMenu';

export const AppNavbar = ({ formOpen, setFormOpen }) => {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <Navbar
      collapseOnSelect
      className='mb-3 shadow'
      expand='md'
      bg='dark'
      variant='dark'
    >
      <Container fluid='lg'>
        <Navbar.Brand as={Link} to='/'>
          SocialMeetups
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
            {authenticated && (
              <LoggedInMenu setAuthenticated={setAuthenticated} />
            )}
            {!authenticated && (
              <LoggedOutMenu setAuthenticated={setAuthenticated} />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
