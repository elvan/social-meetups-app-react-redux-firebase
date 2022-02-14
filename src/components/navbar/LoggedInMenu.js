import { Fragment, useEffect, useState } from 'react';
import { Button, Image, Modal, NavDropdown } from 'react-bootstrap';
import { FaCog, FaPlus, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logoutUser } from '../../features/auth/store/authActions';

export const LoggedInMenu = () => {
  // @ts-ignore
  const { currentUser } = useSelector((state) => state.authState);
  const [showModal, setShowModal] = useState(false);
  const [unmounted, setUnmounted] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  const handleLogout = async () => {
    if (!unmounted) {
      await dispatch(logoutUser());
      setShowModal(false);
      toast.success('You are logged out successfully');
      history.push('/');
    }
  };

  useEffect(() => {
    setUnmounted(false);
    return () => {
      setUnmounted(true);
    };
  }, []);

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Logging Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Not sure
          </Button>
          <Button variant='danger' onClick={handleLogout}>
            Yes, logout
          </Button>
        </Modal.Footer>
      </Modal>

      <NavDropdown
        alignRight={true}
        title={
          <Fragment>
            <Image
              src={currentUser.photoURL || '/assets/user.png'}
              width={38.5}
              fluid
              roundedCircle
              className='mr-2'
            />
            <span>{currentUser.displayName}</span>
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
        <NavDropdown.Item as={Link} to='/profile'>
          <div className='d-flex align-items-center'>
            <FaUserAlt className='mr-2' />
            My Profile
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/account'>
          <div className='d-flex align-items-center'>
            <FaCog className='mr-2' />
            My Account
          </div>
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item
          as='a'
          onClick={handleShow}
          style={{ cursor: 'pointer' }}
        >
          <div className='d-flex align-items-center'>
            <FaSignOutAlt className='mr-2' />
            Logout
          </div>
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};
