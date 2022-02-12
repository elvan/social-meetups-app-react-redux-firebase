import { useState } from 'react';
import Calendar from 'react-calendar';
import { FaCalendarAlt, FaFilter } from 'react-icons/fa';

export const MeetupFilters = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div className='bg-white shadow rounded mb-3'>
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
              I am going
            </li>
            <li className='list-group-item d-flex align-items-center'>
              I am hosting
            </li>
          </ul>
        </div>
      </div>

      <div className='bg-white shadow rounded mb-3'>
        <div className='card'>
          <div className='card-header bg-info text-white'>
            <div className='d-flex justify-content-center align-items-center'>
              <FaCalendarAlt size={15} className='mr-2' />
              Select Date
            </div>
          </div>

          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
    </>
  );
};
