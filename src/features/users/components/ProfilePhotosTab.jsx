import { useState } from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import { ProfilePhotosForm } from './ProfilePhotosForm';

export const ProfilePhotosTab = ({ currentUser, profile }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      {profile && (
        <div>
          <div className='mb-3'>
            <div className='d-flex justify-content-between align-items-start'>
              <div>
                <h5>Photos</h5>
              </div>
              {currentUser?.uid === profile.id && (
                <button
                  className='btn btn-sm btn-outline-primary'
                  onClick={() => setEditMode(!editMode)}
                >
                  {editMode ? 'Cancel' : 'Add Photo'}
                </button>
              )}
            </div>
          </div>

          {editMode ? (
            <ProfilePhotosForm profile={profile} setEditMode={setEditMode} />
          ) : (
            <Card style={{ width: '150px' }}>
              <Card.Img variant='top' src='/assets/user.png' />
              <Card.Body className='p-1'>
                <ButtonGroup className='d-flex justify-content-center'>
                  <Button
                    size='sm'
                    variant='outline-success'
                    style={{ width: '100%' }}
                  >
                    Main
                  </Button>
                  <Button
                    size='sm'
                    variant='outline-danger'
                    style={{ width: '100%' }}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          )}
        </div>
      )}
    </>
  );
};
