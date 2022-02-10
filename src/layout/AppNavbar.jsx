import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

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
        <Navbar.Brand href='/'>SocialMeetups</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/meetups'>All Meetups</Nav.Link>
            <Nav.Link href='/create-meetup'>Create Meetup</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='/login'>Login</Nav.Link>
            <Nav.Link href='/register'>Register</Nav.Link>
            <NavDropdown
              alignRight={true}
              title='user@example.com'
              id='collasible-nav-dropdown'
            >
              <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
              <NavDropdown.Item href='/settings'>Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/logout'>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
