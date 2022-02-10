import { FaCalendar, FaInfo, FaMapMarkerAlt } from 'react-icons/fa';

export const MeetupDetailsInfo = () => {
  return (
    <div className='shadow rounded'>
      <div className='card mb-3'>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <FaInfo size={18} className='text-info mr-2' />
            Meetup Description
          </li>
          <li className='list-group-item'>
            <FaCalendar size={18} className='text-info mr-2' />
            Meetup Date
          </li>
          <li className='list-group-item'>
            <FaMapMarkerAlt size={18} className='text-info mr-2' />
            Meetup Venue
          </li>
          <li className='list-group-item'>
            <button className='btn btn-info'>Show Map</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
