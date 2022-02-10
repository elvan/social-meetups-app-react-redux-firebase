import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <Row>
      <Col xs={12} md={8} className='mb-3'>
        <div className='p-4 bg-white shadow rounded'>
          <h1 className='display-4'>Welcome to SocialMeetups!</h1>
          <p className='lead'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            odit voluptate esse enim?
          </p>

          <hr className='my-3' />

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            corporis veniam eos omnis quaerat deserunt totam earum illo pariatur
            excepturi neque, eveniet maxime incidunt culpa officiis labore autem
            sunt.
          </p>
          <Link
            className='btn btn-dark btn-lg shadow'
            to='/meetups'
            role='button'
          >
            Get Started
          </Link>
        </div>
      </Col>
      <Col xs={12} md={4}>
        <h4>Sidebar</h4>
      </Col>
    </Row>
  );
};
