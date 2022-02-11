import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaUserPlus, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LoginForm } from '../auth/LoginForm';

export const HomePage = ({ history }) => {
  return (
    <Fragment>
      <div className='container-lg pt-5'>
        <Row className='mt-5'>
          <Col xs={12} md={6} className='mb-3 py-5 px-3'>
            <h1 className='font-weight-bolder mt-5'>
              <div className='d-flex align-items-center'>
                <FaUsers size={48} className='mr-2' />
                <span className='text-primary'>Social</span>
                <span className='text-info'>Meetups</span>
              </div>
            </h1>
            <p className='lead'>
              Create or join a meetup to connect with people you know in your
              area.
            </p>
            <div>
              <Link to='/meetups' className='btn btn-info btn-lg'>
                See All Meetups
              </Link>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Card className='rounded bg-white shadow'>
              <Card.Body>
                <LoginForm />

                <p className='text-center'>
                  <Link to='/forgot-password' className='text-primary'>
                    Forgotten Password?
                  </Link>
                </p>

                <hr />

                <p className='text-center'>
                  <Link
                    className='btn btn-success shadow'
                    to='/register'
                    role='button'
                  >
                    <FaUserPlus size={18} className='mr-2' />
                    Create New Account
                  </Link>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <footer className='footer text-dark mt-auto bg-white py-3'>
        <div className='container-lg'>
          <span>&copy; SocialMeetups {new Date().getFullYear()}</span>
          <span className='float-right'>
            <Link to='/meetups' className='text-dark mr-2'>
              All Meetups
            </Link>
            <Link to='/source-code' className='text-dark mr-2'>
              Source Code
            </Link>
            <Link to='/license' className='text-dark'>
              License
            </Link>
          </span>
        </div>
      </footer>
    </Fragment>
  );
};
