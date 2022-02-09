import { Card, Col, Image, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaClock, FaMapMarker } from 'react-icons/fa';
import { MeetupListAttendee } from './MeetupListAttendee';

export const MeetupListItem = ({ meetup }) => {
  return (
    <Card className='shadow mb-3 bg-white rounded'>
      <Card.Body className='row'>
        <Col xs={2}>
          <Image src={meetup.hostPhotoUrl} width={100} fluid roundedCircle />
        </Col>
        <Col xs={10}>
          <Card.Title>{meetup.title}</Card.Title>
          <Card.Text>
            Hosted by <strong>{meetup.hostedBy}</strong>
          </Card.Text>
        </Col>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroupItem>
          <FaClock size={18} /> {meetup.date}
          <FaMapMarker size={18} className='ml-3' /> {meetup.venue},{' '}
          {meetup.city}
        </ListGroupItem>
        <ListGroupItem>
          {meetup.attendees.map((attendee) => (
            <MeetupListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </ListGroupItem>
        <ListGroupItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at modi
          impedit minima mollitia perspiciatis debitis. Sunt facere
          exercitationem quos? Maxime voluptatibus explicabo, illo nemo commodi
          necessitatibus tenetur nam atque?
        </ListGroupItem>
      </ListGroup>
      <Card.Body className='col-12'>
        <a href='/meetups/123' className='btn btn-success mr-2'>
          View Meetup
        </a>
        <a href='/manage-meetup/123' className='btn btn-outline-info'>
          Manage
        </a>
      </Card.Body>
    </Card>
  );
};
