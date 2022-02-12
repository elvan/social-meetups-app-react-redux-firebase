import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../../../common/async/asyncActions';
import { LoadingComponent } from '../../../../components/loading/LoadingComponent';
import { dataFromSnapshot } from '../../../../firebase/dataFromSnapshot';
import { fetchMeetupsFromFirestore } from '../../services/meetupFirestore';
import { listenToMeetups } from '../../store/meetupActions';
import { MeetupFilters } from './components/MeetupFilters';
import { MeetupList } from './components/MeetupList';

export const MeetupDashboardPage = () => {
  // @ts-ignore
  const { meetups } = useSelector((state) => state.meetupState);

  // @ts-ignore
  const { loading } = useSelector((state) => state.asyncState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncActionStart());
    const unsubscribe = fetchMeetupsFromFirestore({
      next: (collSnapshot) => {
        dispatch(listenToMeetups(collSnapshot.docs.map(dataFromSnapshot)));
        dispatch(asyncActionFinish());
      },
      error: (error) => {
        dispatch(asyncActionError(error));
      },
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <Row>
      <Col md={8}>
        {loading && (
          <>
            <LoadingComponent />
            <LoadingComponent />
          </>
        )}
        {!loading && meetups.length > 0 && <MeetupList meetups={meetups} />}
        {!loading && meetups.length === 0 && <p>No meetups found</p>}
      </Col>
      <Col md={4}>
        <MeetupFilters />
      </Col>
    </Row>
  );
};
