import { Fragment } from 'react';
import { Image, NavDropdown } from 'react-bootstrap';
import { FaPlus, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logoutUser } from '../../features/auth/store/authActions';

export const LoggedInMenu = () => {
  // @ts-ignore
  const { currentUser } = useSelector((state) => state.authState);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logoutUser());
    history.push('/');
  };

  return (
    <NavDropdown
      alignRight={true}
      title={
        <Fragment>
          <Image
            src={currentUser.photoUrl}
            width={38.5}
            fluid
            roundedCircle
            className='mr-2'
          />
          <span>{currentUser.email}</span>
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
