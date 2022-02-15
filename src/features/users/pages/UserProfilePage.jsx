import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useFirestoreDocument } from '../../../hooks/useFirestoreDocument';
import { ProfileContent } from '../components/ProfileContent';
import { ProfileHeader } from '../components/ProfileHeader';
import { getUserProfileInFirebase } from '../services/userService';
import { listenToSelectedProfile } from '../store/userActions';

export const UserProfilePage = ({ match }) => {
  const id = match.params.id;
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.asyncState);
  const { currentUser } = useSelector((state) => state.authState);
  const { selectedProfile } = useSelector((state) => state.userState);

  const documentMemo = useMemo(() => getUserProfileInFirebase(id), [id]);

  const listenCallback = useCallback(
    (profile) => {
      return dispatch(listenToSelectedProfile(profile));
    },
    [dispatch]
  );

  useFirestoreDocument({
    documentMemo: documentMemo,
    listenCallback: listenCallback,
  });

  // if (loading) {
  //   return <Loading />;
  // }

  if (error) {
    return toast.error(error.message);
  }

  return (
    <>
      {selectedProfile && (
        <div className='row'>
          <div className='col-md-12'>
            <div className='shadow rounded bg-white p-3 mb-3'>
              <ProfileHeader
                currentUser={currentUser}
                profile={selectedProfile}
              />
            </div>
            <div className='shadow rounded bg-white p-3 mb-3'>
              <ProfileContent
                currentUser={currentUser}
                profile={selectedProfile}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
