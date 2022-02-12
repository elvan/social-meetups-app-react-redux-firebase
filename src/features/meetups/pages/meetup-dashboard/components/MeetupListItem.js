import { format } from 'date-fns';
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
  FaCalendar,
  FaMapMarkerAlt,
  FaTag,
  FaTrashAlt,
  FaUsers,
} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMeetup } from '../../../store/meetupActions';
import { MeetupListAttendee } from './MeetupListAttendee';

export const MeetupListItem = ({ meetup }) => {
  const dispath = useDispatch();

  function handleDelete() {
    dispath(deleteMeetup(meetup.id));
  }

  return (
    <Card className='mb-3 rounded bg-white shadow'>
      <Card.Body className='row clearfix py-3 px-4'>
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
                <FaCalendar size={15} className='mr-2' />
                {format(meetup.date, 'MMMM d, yyyy h:mm a')}
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
            <FaMapMarkerAlt size={15} className='mr-2' />
            {meetup.venue.address}
          </div>
        </ListGroupItem>
        {meetup.attendees.length > 0 ? (
          <ListGroupItem className='bg-light py-2'>
            {meetup.attendees.map((attendee) => (
              <MeetupListAttendee key={attendee.id} attendee={attendee} />
            ))}
          </ListGroupItem>
        ) : (
          <ListGroupItem className='bg-light py-2'>
            <div className='d-flex align-items-center'>
              <FaUsers size={15} className='mr-2' />
              No attendees yet
            </div>
          </ListGroupItem>
        )}
        <ListGroupItem>{meetup.description}</ListGroupItem>
        <ListGroupItem className='bg-light'>
          <Link to={`/meetups/${meetup.id}`} className='btn btn-info mr-2'>
            <div className='d-flex align-items-center'>
              <FaUsers size={15} className='mr-2' />
              View Meetup
            </div>
          </Link>
          <Button className='btn btn-danger mr-2' onClick={handleDelete}>
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
