import { Fragment } from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaPlus, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

export const AppNavbar = ({ formOpen, setFormOpen }) => {
  const toggleFormOpen = () => {
    setFormOpen(!formOpen);
  };

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
            <Nav.Link as={NavLink} to='/create-meetup'>
              Create Meetup
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to='/login'>
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to='/register'>
              Register
            </Nav.Link>

            <NavDropdown
              alignRight={true}
              title={
                <Fragment>
                  <Image
                    src='https://randomuser.me/api/portraits/men/9.jpg'
                    width={40}
                    fluid
                    roundedCircle
                    className='mr-2'
                  />
                  <span>Example User</span>
                </Fragment>
              }
              id='collasible-nav-dropdown'
            >
              <NavDropdown.Item as={Link} to='/create-meetup'>
                <FaPlus className='mr-2' />
                Create Meetup
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/settings'>
                <FaUserAlt className='mr-2' />
                My Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/logout'>
                <FaSignOutAlt className='mr-2' />
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
