import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ProfileMeetupCard = () => {
  return (
    <Card>
      <Card.Img
        variant='top'
        src='/assets/category-images/travel.jpg'
        style={{ minHeight: '150px', objectFit: 'cover' }}
      />
      <Card.Body className='p-3'>
        <Card.Title>
          <Link to='/meetups' className='stretched-link'>
            Meetup Title
          </Link>
        </Card.Title>
        <Card.Text>Date</Card.Text>
        <Card.Text>Time</Card.Text>
      </Card.Body>
    </Card>
  );
};
