import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Loading } from '../../../../components/loading/Loading';
import { useFirestoreCollection } from '../../../../hooks/useFirestoreCollection';
import { getMeetupsCollection } from '../../services/meetupFirestore';
import { listenToMeetups } from '../../store/meetupActions';
import { MeetupFilters } from './components/MeetupFilters';
import { MeetupList } from './components/MeetupList';

export const MeetupDashboardPage = () => {
  // @ts-ignore
  const { pending, error, meetups } = useSelector((state) => state.meetupState);

  const dispatch = useDispatch();

  useFirestoreCollection({
    collection: getMeetupsCollection,
    documents: (documents) => dispatch(listenToMeetups(documents)),
  });

  if (error) {
    toast.error(error);
  }

  return (
    <Row>
      <Col md={8}>
        {pending && <Loading />}
        {!pending && meetups.length > 0 && <MeetupList meetups={meetups} />}
        {!pending && meetups.length === 0 && <p>No meetups found</p>}
      </Col>
      <Col md={4}>
        <MeetupFilters />
      </Col>
    </Row>
  );
};
