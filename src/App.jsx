import { Button, Container, Spinner } from 'react-bootstrap';

export const App = () => {
  return (
    <Container fluid='lg' className='vh-100'>
      <h1>SocialMeetups</h1>
      <div>
        <Button variant='dark' disabled>
          <Spinner animation='border' as='span' className='mr-2' size='sm' />
          Loading...
        </Button>
      </div>
    </Container>
  );
};
