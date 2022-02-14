import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Loading } from '../../../components/loading/Loading';
import { useDocument } from '../../../hooks/useDocument';
import { ProfileContent } from '../components/ProfileContent';
import { ProfileHeader } from '../components/ProfileHeader';
import { getUserProfileData } from '../services/userService';
import { listenToUserProfile } from '../store/userActions';

export const UserProfilePage = ({ match }) => {
  const id = match.params.id;
  const dispatch = useDispatch();

  const { isLoading, isError, userProfile, error } = useSelector(
    (state) => state.userState
  );

  const documentMemo = useMemo(() => getUserProfileData(id), [id]);

  const listenCallback = useCallback(
    (profile) => {
      return dispatch(listenToUserProfile(profile));
    },
    [dispatch]
  );

  useDocument({
    documentMemo: documentMemo,
    listenCallback: listenCallback,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return toast.error(error.message);
  }

  return (
    <>
      {userProfile && (
        <div className='row'>
          <div className='col-md-12'>
            <div className='shadow rounded bg-white p-3 mb-3'>
              <ProfileHeader profile={userProfile} />
            </div>
            <div className='shadow rounded bg-white p-3 mb-3'>
              <ProfileContent profile={userProfile} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
