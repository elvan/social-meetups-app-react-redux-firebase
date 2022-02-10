import { Fragment } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const LoggedOutMenu = ({ setAuthenticated }) => {
  return (
    <Fragment>
      <Nav.Link onClick={() => setAuthenticated(true)}>Login</Nav.Link>
      <Nav.Link as={NavLink} to='/register'>
        Register
      </Nav.Link>
    </Fragment>
  );
};
