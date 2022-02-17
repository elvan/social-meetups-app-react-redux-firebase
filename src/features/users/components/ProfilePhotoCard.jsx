import { useState } from 'react';
import { Button, ButtonGroup, Card, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { deleteFileFromStorage } from '../services/storageService';
import {
  deletePhotoFromFirestore,
  setMainPhotoInFirebase,
} from '../services/userService';

export const ProfilePhotoCard = ({ currentUser, selectedProfile, photo }) => {
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleSetMainPhoto = async (photo) => {
    setUpdating(true);
    try {
      await setMainPhotoInFirebase(photo);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setUpdating(false);
    }
  };

  const handleDeletePhoto = async (photo) => {
    setDeleting(true);
    try {
      await deleteFileFromStorage(photo.name);
      await deletePhotoFromFirestore(photo.id);
      setDeleting(false);
    } catch (error) {
      setDeleting(false);
      toast.error(error.message);
    }
  };

  return (
    <Card style={{ width: '200px' }} className='mx-auto'>
      <Card.Img variant='top' src={photo.url} />
      {currentUser?.uid === selectedProfile.id && (
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
              disabled={updating || photo.url === selectedProfile.photoURL}
            >
              {updating ? (
                <Spinner
                  animation='border'
                  style={{ height: '18px', width: '18px' }}
                />
              ) : (
                <>Main</>
              )}
            </Button>
            <Button
              size='sm'
              variant={
                photo.url === selectedProfile.photoURL
                  ? 'danger'
                  : 'outline-danger'
              }
              style={{ width: '100%' }}
              disabled={updating || photo.url === selectedProfile.photoURL}
              onClick={() => handleDeletePhoto(photo)}
            >
              {deleting ? (
                <Spinner
                  animation='border'
                  style={{ height: '18px', width: '18px' }}
                />
              ) : (
                <>Delete</>
              )}
            </Button>
          </ButtonGroup>
        </Card.Body>
      )}
    </Card>
  );
};
