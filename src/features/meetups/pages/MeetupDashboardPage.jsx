import { useCallback, useMemo, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Loading } from '../../../components/loading/Loading';
import { useFirestoreCollection } from '../../../hooks/useFirestoreCollection';
import { MeetupList } from '../components/MeetupList';
import { MeetupListFilters } from '../components/MeetupListFilters';
import { getMeetupsCollection } from '../services/meetupService';
import { listenToMeetups } from '../store/meetupActions';

export const MeetupDashboardPage = () => {
  const dispatch = useDispatch();

  const { loading, error, meetups } = useSelector((state) => state.meetupState);

  const predicates = new Map();
  predicates.set('startDate', new Date());
  predicates.set('filter', 'all');

  const [predicate, setPredicate] = useState(predicates);

  const handleChangePredicate = (key, value) => {
    setPredicate(new Map(predicate.set(key, value)));
  };

  const collectionMemo = useMemo(() => getMeetupsCollection(), []);

  const listenCallback = useCallback(
    (documents) => {
      return dispatch(listenToMeetups(documents));
    },
    [dispatch]
  );

  useFirestoreCollection({
    collectionMemo: collectionMemo,
    listenCallback: listenCallback,
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return toast.error(error);
  }

  return (
    <Row>
      <Col md={8}>
        {meetups.length > 0 && <MeetupList meetups={meetups} />}
        {meetups.length === 0 && <p>No meetups found</p>}
      </Col>
      <Col md={4}>
        <MeetupListFilters
          predicate={predicate}
          changePredicate={handleChangePredicate}
          loading={loading}
        />
      </Col>
    </Row>
  );
};
