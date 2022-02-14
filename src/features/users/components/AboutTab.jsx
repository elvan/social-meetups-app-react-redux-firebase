import { format } from 'date-fns';
import { useState } from 'react';
import { ProfileForm } from './ProfileForm';

export const AboutTab = ({ profile }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      <div className='mb-3'>
        <div className='d-flex justify-content-between align-items-start'>
          <div>
            <h5>About {profile.displayName}</h5>
            <p className='text-muted'>
              Member since: {format(profile.createdAt, 'dd MMM yyyy')}
            </p>
          </div>
          <button
            className='btn btn-sm btn-outline-primary'
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>
      </div>

      {editMode ? (
        <ProfileForm profile={profile} />
      ) : (
        <div>
          <h5>Bio</h5>
          <p>{profile.description}</p>
        </div>
      )}
    </div>
  );
};
