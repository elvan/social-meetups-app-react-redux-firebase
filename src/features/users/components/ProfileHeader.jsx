import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { followUser, unfollowUser } from '../store/userActions';

export const ProfileHeader = ({ currentUser, profile }) => {
  const following = true;
  const dispatch = useDispatch();

  const { friendshipsLoading } = useSelector((state) => state.userState);

  async function handleFollowUser() {
    try {
      dispatch(followUser(profile));
    } catch (error) {
      toast.error(error.message);
    }
  }

  async function handleUnfollowUser() {
    try {
      await dispatch(unfollowUser(profile));
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <>
      {profile && (
        <div className='row'>
          <div className='col-md-8'>
            <div className='media'>
              <img
                src={profile.photoURL || '/assets/user.png'}
                alt='user'
                className='rounded-circle align-self-start mr-3'
                style={{ width: '100px' }}
              />

              <div className='media-body'>
                <h4 className='mt-0'>{profile.displayName}</h4>
                <h6>Blogger</h6>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='row'>
              <div className='col-6 text-center'>
                <div className='display-4'>123</div>
                <div className=''>Followers</div>
              </div>

              <div className='col-6 text-center'>
                <div className='display-4'>123</div>
                <div className=''>Following</div>
              </div>
            </div>

            {currentUser?.uid !== profile.id && (
              <>
                <hr />
                <div>
                  <button
                    disabled={friendshipsLoading}
                    className={
                      following
                        ? 'btn btn-block btn-info'
                        : 'btn btn-block btn-outline-info'
                    }
                    onClick={handleFollowUser}
                  >
                    <div className='d-flex justify-content-center align-items-center'>
                      {friendshipsLoading && (
                        <Spinner
                          animation='border'
                          style={{ height: '22.5px', width: '22.5px' }}
                        />
                      )}
                      {!friendshipsLoading && 'Follow'}
                    </div>
                  </button>
                  <button
                    disabled={friendshipsLoading}
                    className={
                      following
                        ? 'btn btn-block btn-info'
                        : 'btn btn-block btn-outline-info'
                    }
                    onClick={handleUnfollowUser}
                  >
                    <div className='d-flex justify-content-center align-items-center'>
                      {friendshipsLoading && (
                        <Spinner
                          animation='border'
                          style={{ height: '22.5px', width: '22.5px' }}
                        />
                      )}
                      {!friendshipsLoading && 'Unfollow'}
                    </div>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
