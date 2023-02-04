import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const MeetupDetailsSidebar = ({ attendees, hostUid }) => {
  return (
    <div className="bg-white shadow rounded">
      <div className="card">
        <div className="card-header bg-info text-white">
          <div className="d-flex justify-content-center align-items-center">
            <FaUsers size={15} className="mr-2" />
            {attendees.length}
            {attendees.length > 1 ? ' People Going' : ' Person Going'}
          </div>
        </div>

        <ul className="list-group list-group-flush">
          {attendees.map((attendee) => (
            <li
              key={attendee.id}
              className="list-group-item d-flex align-items-center px-3 py-2"
            >
              <Link to={`/profiles/${attendee.id}`}>
                <img
                  src={attendee.photoURL ?? '/assets/user.png'}
                  alt="a man"
                  width={50}
                  className="mr-2 rounded-circle"
                />
                <span className="card-title h5 mb-0">
                  {attendee.displayName}
                  {hostUid === attendee.id && (
                    <>
                      {' '}
                      <span className="badge badge-secondary">Host</span>
                    </>
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
