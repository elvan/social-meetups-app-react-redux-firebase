import { Col, Row } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { LoadingComponent } from '../../../../components/loading/LoadingComponent';
import { MeetupList } from './components/MeetupList';

export const MeetupDashboardPage = () => {
  // @ts-ignore
  const { meetups } = useSelector((state) => state.meetupState);

  // @ts-ignore
  const { loading } = useSelector((state) => state.asyncState);

  return (
    <Row>
      <Col md={8}>
        {loading && <LoadingComponent />}
        {!loading && meetups.length > 0 && <MeetupList meetups={meetups} />}
        {!loading && meetups.length === 0 && <p>No meetups found</p>}
      </Col>
      <Col md={4}>
        <div className='bg-white shadow rounded'>
          <div className='card'>
            <div className='card-header bg-info text-white'>
              <div className='d-flex justify-content-center align-items-center'>
                <FaFilter size={15} className='mr-2' />
                Meetup Filters
              </div>
            </div>

            <ul className='list-group list-group-flush'>
              <li className='list-group-item d-flex align-items-center'>
                All Meetups
              </li>
              <li className='list-group-item d-flex align-items-center'>
                Meetups I am attending
              </li>
            </ul>
          </div>
        </div>
      </Col>
    </Row>
  );
};
