import { Button } from 'react-bootstrap';
import { FaUserCheck, FaUsersCog, FaUserTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const MeetupDetailsHeader = ({ meetup }) => {
  return (
    <div className='shadow rounded'>
      <div className='card mb-3'>
        <div className='bg-dark text-white'>
          <img
            src={`/assets/category-images/${meetup.category}.jpg`}
            className='card-img-top'
            alt='event-party'
            height={240}
            style={{ objectFit: 'cover', filter: 'brightness(0.3)' }}
          />
          <div className='top-left'>
            <h4 className='card-title'>{meetup.title}</h4>
            <p className='card-text'>{meetup.date}</p>
            <p className='card-text'>Hosted by {meetup.hostedBy}</p>
          </div>
        </div>

        <div className='card-body d-flex bg-white'>
          <Button className='btn btn-danger'>
            <div className='d-flex align-items-center'>
              <FaUserTimes size={15} className='mr-2' />
              Cancel My Place
            </div>
          </Button>
          <Button className='btn btn-success'>
            <div className='d-flex align-items-center'>
              <FaUserCheck size={15} className='mr-2' />
              Join This Meetup
            </div>
          </Button>
          <Link
            to={`/manage-meetup/${meetup.id}`}
            className='btn btn-info ml-auto'
          >
            <div className='d-flex align-items-center'>
              <FaUsersCog size={15} className='mr-2' />
              Manage Meetup
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
