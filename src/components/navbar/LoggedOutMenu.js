import { Fragment } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const LoggedOutMenu = () => {
  return (
    <Fragment>
      <Nav.Link onClick={() => console.log()}>Login</Nav.Link>
      <Nav.Link as={NavLink} to='/register'>
        Register
      </Nav.Link>
    </Fragment>
  );
};
