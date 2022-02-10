import { Row } from 'react-bootstrap';

export const HomePage = () => {
  return (
    <Row>
      <div className='col-8'>
        <div className='jumbotron bg-white shadow rounded'>
          <h1 className='display-4'>Welcome to SocialMeetups!</h1>
          <p className='lead'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            odit voluptate esse enim? Iusto ea libero facere cumque praesentium
            vero, porro officia sit modi velit harum, officiis quis hic.
            Consectetur?
          </p>

          <hr className='my-4' />

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
            officiis quos! Exercitationem, deserunt. Officia impedit consectetur
            debitis ex distinctio, blanditiis dolore quam veniam qui! Aperiam
            distinctio sequi cupiditate excepturi consectetur.
          </p>
          <a className='btn btn-dark btn-lg' href='/meetups' role='button'>
            Get Started
          </a>
        </div>
      </div>
      <div className='col-4'>
        <h4>Sidebar</h4>
      </div>
    </Row>
  );
};
