import { useState } from 'react';
import { Button, ButtonGroup, Card, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { setMainPhotoInFirebase } from '../services/userService';

export const ProfilePhotoCard = ({ selectedProfile, photo }) => {
  const [loading, setLoading] = useState(false);

  const handleSetMainPhoto = async (photo) => {
    setLoading(true);
    try {
      await setMainPhotoInFirebase(photo);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card style={{ width: '200px' }} className='mx-auto'>
      <Card.Img variant='top' src={photo.url} />
      <Card.Body className='p-1'>
        <ButtonGroup className='d-flex'>
          <Button
            variant={
              photo.url === selectedProfile.photoURL
                ? 'success'
                : 'outline-success'
            }
            style={{ width: '100%' }}
            onClick={() => handleSetMainPhoto(photo)}
            disabled={loading || photo.url === selectedProfile.photoURL}
          >
            {loading ? (
              <Spinner
                animation='border'
                style={{ height: '18px', width: '18px' }}
              />
            ) : (
              <>Main</>
            )}
          </Button>
          <Button size='sm' variant='outline-danger' style={{ width: '100%' }}>
            Delete
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};
