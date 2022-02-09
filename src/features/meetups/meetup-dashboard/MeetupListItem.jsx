import { Card, Col, Image, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaClock, FaMapMarker, FaTag } from 'react-icons/fa';
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
          <FaClock size={16} className='mr-1' />
          {meetup.date}
          <FaTag size={16} className='ml-3 mr-1' />
          {meetup.category}
        </ListGroupItem>
        <ListGroupItem>
          <FaMapMarker size={16} className='mr-1' />
          {meetup.venue}
        </ListGroupItem>
        <ListGroupItem className='bg-light'>
          {meetup.attendees.map((attendee) => (
            <MeetupListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </ListGroupItem>
        <ListGroupItem>{meetup.description}</ListGroupItem>
      </ListGroup>
      <Card.Body className='col-12'>
        <a href={`/meetups/${meetup.id}`} className='btn btn-success mr-2'>
          View Meetup
        </a>
        <a
          href={`/manage-meetup/${meetup.id}`}
          className='btn btn-outline-info'
        >
          Manage
        </a>
      </Card.Body>
    </Card>
  );
};
