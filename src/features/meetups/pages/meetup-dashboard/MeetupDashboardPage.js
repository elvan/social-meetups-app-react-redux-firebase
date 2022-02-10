import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';
import { sampleData } from '../../data/sampleData';
import { MeetupList } from './components/MeetupList';

export const MeetupDashboardPage = ({ selectMeetup, selectedMeetup }) => {
  const [meetups, setMeetups] = useState(sampleData);

  const handleDeleteMeetup = (id) => {
    setMeetups(meetups.filter((meetup) => meetup.id !== id));
  };

  return (
    <Row>
      <Col md={8}>
        <MeetupList
          meetups={meetups}
          selectMeetup={selectMeetup}
          deleteMeetup={handleDeleteMeetup}
        />
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
