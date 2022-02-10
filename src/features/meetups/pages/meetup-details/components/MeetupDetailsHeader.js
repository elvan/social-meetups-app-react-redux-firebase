import { Button } from 'react-bootstrap';
import { FaUserCheck, FaUsersCog, FaUserTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const MeetupDetailsHeader = () => {
  return (
    <div className='shadow rounded'>
      <div className='card mb-3'>
        <div className='bg-dark text-white'>
          <img
            src='https://cdn.pixabay.com/photo/2017/12/08/11/53/event-party-3005668_960_720.jpg'
            className='card-img-top'
            alt='event-party'
            height={240}
            style={{ objectFit: 'cover', filter: 'brightness(0.3)' }}
          />
          <div className='top-left'>
            <h4 className='card-title'>Meetup Title</h4>
            <p className='card-text'>Meetup Date</p>
            <p className='card-text'>Hosted by Example User</p>
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
          <Link to={`/update-meetup/123`} className='btn btn-info ml-auto'>
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