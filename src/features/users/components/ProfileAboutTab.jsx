import { format } from 'date-fns';
import { useState } from 'react';
import { ProfileAboutForm } from './ProfileAboutForm';

export const ProfileAboutTab = ({ currentUser, profile }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      {profile && (
        <div>
          <div className='mb-3'>
            <div className='d-flex justify-content-between align-items-start'>
              <div>
                <h5>About {profile.displayName}</h5>
                <p className='text-muted'>
                  Member since: {format(profile.createdAt, 'dd MMM yyyy')}
                </p>
              </div>
              {currentUser?.uid === profile.id && (
                <button
                  className='btn btn-sm btn-outline-primary'
                  onClick={() => setEditMode(!editMode)}
                >
                  {editMode ? 'Cancel' : 'Edit Profile'}
                </button>
              )}
            </div>
          </div>

          {editMode ? (
            <ProfileAboutForm profile={profile} setEditMode={setEditMode} />
          ) : (
            <div>
              <h5>Bio</h5>
              <p>{profile.description}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};
