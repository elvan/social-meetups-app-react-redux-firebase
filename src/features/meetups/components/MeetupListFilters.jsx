import { ListGroup } from 'react-bootstrap';
import Calendar from 'react-calendar';
import { FaCalendarAlt, FaFilter } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export const MeetupListFilters = ({ predicate, changePredicate, loading }) => {
  const { authenticated } = useSelector((state) => state.authState);

  return (
    <>
      {authenticated && (
        <div className='bg-white shadow rounded mb-3'>
          <div className='card'>
            <div className='card-header bg-primary text-white'>
              <div className='d-flex justify-content-center align-items-center'>
                <FaFilter size={15} className='mr-2' />
                Meetup Filters
              </div>
            </div>
            <ListGroup as='ul' variant='flush'>
              <ListGroup.Item
                as='li'
                active={predicate.get('filter') === 'all'}
                onClick={() => changePredicate('filter', 'all')}
                disabled={loading}
                style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                All Meetups
              </ListGroup.Item>
              <ListGroup.Item
                as='li'
                active={predicate.get('filter') === 'isGoing'}
                onClick={() => changePredicate('filter', 'isGoing')}
                disabled={loading}
                style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                I am going
              </ListGroup.Item>
              <ListGroup.Item
                as='li'
                active={predicate.get('filter') === 'isHosting'}
                onClick={() => changePredicate('filter', 'isHosting')}
                disabled={loading}
                style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                I am hosting
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      )}

      <div className='bg-white shadow rounded mb-3'>
        <div className='card'>
          <div className='card-header bg-primary text-white'>
            <div className='d-flex justify-content-center align-items-center'>
              <FaCalendarAlt size={15} className='mr-2' />
              Select Date
            </div>
          </div>

          <Calendar
            onChange={(date) => changePredicate('startDate', date)}
            value={predicate.get('startDate') || new Date()}
            tileDisabled={() => loading}
          />
        </div>
      </div>
    </>
  );
};
