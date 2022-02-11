import { Fragment } from 'react';
import { Image, NavDropdown } from 'react-bootstrap';
import { FaPlus, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const LoggedInMenu = ({ handleLogout }) => {
  return (
    <NavDropdown
      alignRight={true}
      title={
        <Fragment>
          <Image
            src='https://randomuser.me/api/portraits/men/9.jpg'
            width={38.5}
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
        <div className='d-flex align-items-center'>
          <FaPlus className='mr-2' />
          Create Meetup
        </div>
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to='/settings'>
        <div className='d-flex align-items-center'>
          <FaUserAlt className='mr-2' />
          My Profile
        </div>
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={handleLogout}>
        <div className='d-flex align-items-center'>
          <FaSignOutAlt className='mr-2' />
          Logout
        </div>
      </NavDropdown.Item>
    </NavDropdown>
  );
};