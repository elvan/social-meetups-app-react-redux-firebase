import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
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
              title='user@example.com'
              id='collasible-nav-dropdown'
            >
              <NavDropdown.Item as={Link} to='/profile'>
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/settings'>
                Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/logout'>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
