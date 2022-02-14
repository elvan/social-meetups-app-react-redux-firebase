import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Loading } from '../../../components/loading/Loading';
import { useDocument } from '../../../hooks/useDocument';
import { ProfileContent } from '../components/ProfileContent';
import { ProfileHeader } from '../components/ProfileHeader';
import { getUserProfileData } from '../services/userService';
import { listenToUserProfile } from '../store/userActions';

export const UserProfilePage = ({ match }) => {
  const { isLoading, isError, userProfile, error } = useSelector(
    (state) => state.userState
  );
  const dispatch = useDispatch();

  const id = match.params.id;

  useDocument({
    document: () => getUserProfileData(id),
    listen: (profile) => dispatch(listenToUserProfile(profile)),
    deps: [dispatch, id],
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
