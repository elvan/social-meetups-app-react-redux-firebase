import {
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
      <Card.Body className='row py-3 px-4 clearfix'>
        <Image
          className='float-left ml-2 mr-2'
          src={meetup.hostPhotoUrl}
          width={100}
          fluid
          roundedCircle
        />
        <Col>
          <Card.Title className='mb-2'>{meetup.title}</Card.Title>
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
        <ListGroupItem className='bg-light py-2'>
          {meetup.attendees.map((attendee) => (
            <MeetupListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </ListGroupItem>
        <ListGroupItem>{meetup.description}</ListGroupItem>
      </ListGroup>
      <Card.Body style={{ padding: '12px 20px' }}>
        <Card.Link
          as={Link}
          to={`/meetups/${meetup.id}`}
          className='btn btn-info'
        >
          View Meetup
        </Card.Link>
        <Card.Link
          className='btn btn-danger mr-2'
          onClick={() => deleteMeetup(meetup.id)}
        >
          Delete
        </Card.Link>
      </Card.Body>
    </Card>
  );
};
