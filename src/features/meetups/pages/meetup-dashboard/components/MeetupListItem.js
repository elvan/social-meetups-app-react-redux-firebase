import {
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap';
import {
  FaClock,
  FaMapMarker,
  FaTag,
  FaTrashAlt,
  FaUsers,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MeetupListAttendee } from './MeetupListAttendee';

export const MeetupListItem = ({ meetup, deleteMeetup }) => {
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
              <div className='d-flex align-items-center'>
                <FaClock size={15} className='mr-2' />
                {meetup.date}
              </div>
            </Col>
            <Col>
              <div className='d-flex align-items-center'>
                <FaTag size={15} className='ml-3 mr-2' />
                {meetup.category}
              </div>
            </Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem>
          <div className='d-flex align-items-center'>
            <FaMapMarker size={15} className='mr-2' />
            {meetup.venue}
          </div>
        </ListGroupItem>
        <ListGroupItem className='py-2'>
          {meetup.attendees.map((attendee) => (
            <MeetupListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </ListGroupItem>
        <ListGroupItem>{meetup.description}</ListGroupItem>
        <ListGroupItem className='bg-light'>
          <Link to={`/meetups/${meetup.id}`} className='btn btn-info mr-2'>
            <div className='d-flex align-items-center'>
              <FaUsers size={15} className='mr-2' />
              View Meetup
            </div>
          </Link>
          <Button
            className='btn btn-danger mr-2'
            onClick={() => deleteMeetup(meetup.id)}
          >
            <div className='d-flex align-items-center'>
              <FaTrashAlt size={15} className='mr-2' />
              Delete
            </div>
          </Button>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};
