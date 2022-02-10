import { Fragment } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const HomePage = ({ history }) => {
  return (
    <Fragment>
      <div className='container-lg pt-5'>
        <Row className='mt-5'>
          <Col xs={12} md={6} className='py-5 px-5 mb-3'>
            <h1 className='display-4 mt-5'>
              <span className='text-primary'>Social</span>
              <span className='text-info'>Meetups</span>
            </h1>
            <p className='lead'>
              Create or join a meetup to connect with people you know in your
              area.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <Card className='bg-white rounded shadow'>
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

                  <Button type='submit' block className='btn-lg shadow'>
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
                    className='btn btn-success btn-lg shadow'
                    to='/register'
                    role='button'
                  >
                    Create New Account
                  </Link>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <footer className='footer bg-white text-dark mt-auto py-3'>
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
