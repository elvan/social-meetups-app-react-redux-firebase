import { FaUsers } from 'react-icons/fa';

export const MeetupDetailsSidebar = ({ attendees }) => {
  return (
    <div className='bg-white shadow rounded'>
      <div className='card'>
        <div className='card-header bg-info text-white'>
          <div className='d-flex justify-content-center align-items-center'>
            <FaUsers size={15} className='mr-2' />
            {attendees.length}
            {attendees.length > 1 ? ' People Going' : ' Person Going'}
          </div>
        </div>

        <ul className='list-group list-group-flush'>
          {attendees.map((attendee) => (
            <li
              key={attendee.id}
              className='list-group-item d-flex align-items-center px-3 py-2'
            >
              <img
                src={attendee.photoUrl ?? '/assets/user.png'}
                alt='a man'
                width={50}
                className='mr-2 rounded-circle'
              />
              <p className='card-title h5 mb-0'>{attendee.displayName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
