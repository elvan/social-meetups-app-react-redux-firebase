import { useCallback, useMemo, useState } from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../../../components/loading/Loading';
import { PhotoUploadWidget } from '../../../components/photos/PhotoUploadWidget';
import { useCollection } from '../../../hooks/useCollection';
import { getUserPhotosCollection } from '../services/userService';
import { listenToUserPhotos } from '../store/userActions';

export const ProfilePhotosTab = ({ currentUser, profile }) => {
  const profileId = profile.id;
  const [editMode, setEditMode] = useState(false);

  const { loading } = useSelector((state) => state.asyncState);
  const { photos } = useSelector((state) => state.userState);

  const dispatch = useDispatch();

  const collectionMemo = useMemo(
    () => getUserPhotosCollection(profileId),
    [profileId]
  );

  const listenCallback = useCallback(
    (photos) => {
      return dispatch(listenToUserPhotos(photos));
    },
    [dispatch]
  );

  useCollection({
    collectionMemo: collectionMemo,
    listenCallback: listenCallback,
  });

  if (loading) {
    return <Loading />;
  }

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
            <PhotoUploadWidget setEditMode={setEditMode} />
          ) : (
            <div className='row'>
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className='col-md-4 mb-3  align-self-center'
                >
                  <Card style={{ width: '150px' }} className='mx-auto'>
                    <Card.Img variant='top' src={photo.url} />
                    <Card.Body className='p-1'>
                      <ButtonGroup className='d-flex'>
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
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};
