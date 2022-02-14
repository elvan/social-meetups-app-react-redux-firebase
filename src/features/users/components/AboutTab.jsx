import { format } from 'date-fns';
import { useState } from 'react';

export const AboutTab = ({ profile }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      <div className='mb-3'>
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <h5>About</h5>
            <p className='text-muted'>
              Member since: {format(profile.createdAt, 'dd MMM yyyy')}
            </p>
          </div>
          <button
            className='btn btn-sm btn-outline-primary'
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? 'Cancel' : 'Edit'}
          </button>
        </div>
      </div>

      {editMode ? (
        <div>
          <textarea
            className='form-control'
            rows={5}
            defaultValue={profile.about}
          />
        </div>
      ) : (
        <div>
          <p>{profile.about}</p>
        </div>
      )}
    </div>
  );
};
