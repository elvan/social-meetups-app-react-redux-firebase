import { format } from 'date-fns';
import { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { FaUserCheck, FaUsersCog, FaUserTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  addUserAttendanceToFirestore,
  removeUserAttendanceFromFirestore,
} from '../services/meetupService';

export const MeetupDetailsHeader = ({ meetup, isHost, isGoing }) => {
  const [joining, setJoining] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const handleUserJoinMeetup = async () => {
    setJoining(true);
    try {
      await addUserAttendanceToFirestore(meetup.id);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setJoining(false);
    }
  };

  const handleUserLeaveMeetup = async () => {
    setLeaving(true);
    try {
      await removeUserAttendanceFromFirestore(meetup.id);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLeaving(false);
    }
  };

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
            <p className='card-text'>
              {format(meetup.date, 'MMMM d, yyyy h:mm a')}
            </p>
            <p className='card-text'>Hosted by {meetup.hostedBy}</p>
          </div>
        </div>

        <div className='card-body d-flex bg-white p-3'>
          {!isHost && (
            <>
              {isGoing ? (
                <Button
                  className='btn btn-danger'
                  onClick={handleUserLeaveMeetup}
                  disabled={leaving}
                >
                  <div className='d-flex align-items-center'>
                    <>
                      {leaving ? (
                        <Spinner
                          animation='border'
                          size='sm'
                          className='mr-2'
                        />
                      ) : (
                        <FaUserTimes size={15} className='mr-2' />
                      )}
                      Cancel My Place
                    </>
                  </div>
                </Button>
              ) : (
                <Button
                  className='btn btn-success'
                  onClick={handleUserJoinMeetup}
                  disabled={joining}
                >
                  <div className='d-flex align-items-center'>
                    <>
                      {joining ? (
                        <Spinner
                          animation='border'
                          size='sm'
                          className='mr-2'
                        />
                      ) : (
                        <FaUserCheck size={15} className='mr-2' />
                      )}
                      Join This Meetup
                    </>
                  </div>
                </Button>
              )}
            </>
          )}

          {isHost && (
            <Link
              to={`/manage-meetup/${meetup.id}`}
              className='btn btn-info ml-auto'
            >
              <div className='d-flex align-items-center'>
                <FaUsersCog size={15} className='mr-2' />
                Manage Meetup
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
