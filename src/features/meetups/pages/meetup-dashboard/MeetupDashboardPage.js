import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Loading } from '../../../../components/loading/Loading';
import { useCollection } from '../../../../hooks/useCollection';
import { getMeetupsCollection } from '../../services/meetupFirestore';
import { listenToMeetups } from '../../store/meetupActions';
import { MeetupFilters } from './components/MeetupFilters';
import { MeetupList } from './components/MeetupList';

export const MeetupDashboardPage = () => {
  // @ts-ignore
  const { pending, error, meetups } = useSelector((state) => state.meetupState);

  const dispatch = useDispatch();

  useCollection({
    collection: getMeetupsCollection,
    listen: (documents) => dispatch(listenToMeetups(documents)),
  });

  if (error) {
    toast.error(error);
  }

  if (pending) {
    return <Loading />;
  }

  return (
    <Row>
      <Col md={8}>
        {meetups.length > 0 && <MeetupList meetups={meetups} />}
        {meetups.length === 0 && <p>No meetups found</p>}
      </Col>
      <Col md={4}>
        <MeetupFilters />
      </Col>
    </Row>
  );
};
