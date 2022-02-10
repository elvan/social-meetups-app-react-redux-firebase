import {
  FaCalendar,
  FaInfo,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export const MeetupDetailsInfo = () => {
  return (
    <div className='shadow rounded'>
      <div className='card mb-3'>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <div className='d-flex align-items-center'>
              <FaInfo size={15} className='mr-2' />
              Meetup Description
            </div>
          </li>
          <li className='list-group-item'>
            <div className='d-flex align-items-center'>
              <FaCalendar size={15} className='mr-2' />
              Meetup Date
            </div>
          </li>
          <li className='list-group-item'>
            <div className='d-flex align-items-center'>
              <FaMapMarkerAlt size={15} className='mr-2' />
              Meetup Venue
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
