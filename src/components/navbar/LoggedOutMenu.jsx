import { Fragment } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const LoggedOutMenu = () => {
  return (
    <Fragment>
      <Nav.Link as={NavLink} to='/login'>
        Login
      </Nav.Link>
      <Nav.Link as={NavLink} to='/register'>
        Register
      </Nav.Link>
    </Fragment>
  );
};
