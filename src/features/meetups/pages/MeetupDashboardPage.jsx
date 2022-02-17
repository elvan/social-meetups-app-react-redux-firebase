import { useCallback, useMemo, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Loading } from '../../../components/loading/Loading';
import { useFirestoreCollection } from '../../../hooks/useFirestoreCollection';
import { MeetupList } from '../components/MeetupList';
import { MeetupListFilters } from '../components/MeetupListFilters';
import { getMeetupsCollection } from '../services/meetupService';
import { listMeetups } from '../store/meetupActions';

export const MeetupDashboardPage = () => {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.asyncState);
  const { meetups } = useSelector((state) => state.meetupState);

  const predicates = new Map();
  predicates.set('startDate', new Date());
  predicates.set('filter', 'all');

  const [predicate, setPredicate] = useState(predicates);

  const collectionMemo = useMemo(
    () => getMeetupsCollection(predicate),
    [predicate]
  );

  const listenCallback = useCallback(
    (documents) => {
      return dispatch(listMeetups(documents));
    },
    [dispatch]
  );

  useFirestoreCollection({
    collectionMemo: collectionMemo,
    listenCallback: listenCallback,
  });

  const handleChangePredicate = (key, value) => {
    setPredicate(new Map(predicate.set(key, value)));
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    toast.error(error.message);
  }

  return (
    <>
      {error?.message && (
        <div className='alert alert-danger'>
          <div>{error.message}</div>
        </div>
      )}
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
    </>
  );
};
