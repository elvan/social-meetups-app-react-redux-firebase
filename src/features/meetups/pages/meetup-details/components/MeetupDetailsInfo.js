import { format } from 'date-fns';
import {
  FaCalendar,
  FaInfo,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaTag,
} from 'react-icons/fa';

export const MeetupDetailsInfo = ({ meetup }) => {
  return (
    <div className='shadow rounded'>
      <div className='card mb-3'>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <div className='d-flex align-items-start'>
              <FaInfo size={15} className='mr-2 mt-1' />
              {meetup.description}
            </div>
          </li>
          <li className='list-group-item'>
            <div className='row'>
              <div className='col-6'>
                <div className='d-flex align-items-center'>
                  <FaCalendar size={15} className='mr-2' />
                  {format(meetup.date, 'MMMM d, yyyy h:mm a')}
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex align-items-center'>
                  <FaTag size={15} className='ml-3 mr-2' />
                  {meetup.category}
                </div>
              </div>
            </div>
          </li>
          <li className='list-group-item'>
            <div className='d-flex align-items-center'>
              <FaMapMarkerAlt size={15} className='mr-2' />
              {meetup.venue.address}
            </div>
          </li>
          <li className='list-group-item'>
            <button className='btn btn-info'>
              <div className='d-flex align-items-center'>
                <FaMapMarkedAlt size={15} className='mr-2' />
                Show Map
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
