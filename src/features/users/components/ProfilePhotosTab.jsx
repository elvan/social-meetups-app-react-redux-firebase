import { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Loading } from '../../../components/loading/Loading';
import { PhotoUploadWidget } from '../../../components/photos/PhotoUploadWidget';
import { useFirestoreCollection } from '../../../hooks/useFirestoreCollection';
import { getUserPhotosCollection } from '../services/userService';
import { listenToUserPhotos } from '../store/userActions';
import { ProfilePhotoCard } from './ProfilePhotoCard';

export const ProfilePhotosTab = ({ currentUser, profile }) => {
  const profileId = profile.id;
  const [editMode, setEditMode] = useState(false);

  const { loading, error, photos, selectedProfile } = useSelector(
    (state) => state.userState
  );

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

  useFirestoreCollection({
    collectionMemo: collectionMemo,
    listenCallback: listenCallback,
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    toast.error(error.message);
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
                  <ProfilePhotoCard
                    photo={photo}
                    selectedProfile={selectedProfile}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};
