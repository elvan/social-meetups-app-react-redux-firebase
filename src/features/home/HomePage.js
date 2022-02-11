import { Fragment } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { FaSignInAlt, FaUserPlus, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
                <Form className='mb-4'>
                  <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' />
                    <Form.Text className='text-danger'>
                      Email is required
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Enter password'
                    />
                    <Form.Text className='text-danger'>
                      Password is required
                    </Form.Text>
                  </Form.Group>

                  <Button type='submit' block className='shadow'>
                    <FaSignInAlt size={18} className='mr-2' />
                    Login
                  </Button>
                </Form>

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
