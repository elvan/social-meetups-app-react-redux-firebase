import {
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap';
import { FaClock, FaMapMarker, FaTag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MeetupListAttendee } from './MeetupListAttendee';

export const MeetupListItem = ({ meetup, selectMeetup, deleteMeetup }) => {
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
          <Row>
            <Col>
              <FaClock size={16} className='mr-1' />
              {meetup.date}
            </Col>
            <Col>
              <FaTag size={16} className='ml-3 mr-1' />
              {meetup.category}
            </Col>
          </Row>
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
        <Link to={`/meetups/${meetup.id}`} className='btn btn-info mr-2'>
          View Meetup
        </Link>
        <Button
          className='btn btn-danger mr-2'
          onClick={() => deleteMeetup(meetup.id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};
