import { format } from 'date-fns';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ProfileMeetupCard = ({ meetup }) => {
  return (
    <Card>
      <Card.Img
        variant='top'
        src={`/assets/category-images/${meetup.category}.jpg`}
        style={{ minHeight: '150px', objectFit: 'cover' }}
      />
      <Card.Body className='p-3'>
        <Card.Title>
          <Link to={`/meetups/${meetup.id}`} className='stretched-link'>
            {meetup.title}
          </Link>
        </Card.Title>
        <Card.Text>{format(meetup.date, 'dd MMM yyyy')}</Card.Text>
        <Card.Text>{format(meetup.date, 'hh:mm a')}</Card.Text>
      </Card.Body>
    </Card>
  );
};
