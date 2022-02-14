import { useState } from 'react';
import { Spinner } from 'react-bootstrap';

export const ProfileHeader = ({ profile }) => {
  const [following, setFollowing] = useState(true);
  const [loading, setLoading] = useState(false);

  return (
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
        <hr />
        <div className='profile-following'>
          <button
            disabled={loading}
            className={
              following
                ? 'btn btn-block btn-info'
                : 'btn btn-block btn-outline-info'
            }
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setFollowing(!following);
                setLoading(false);
              }, 1000);
            }}
          >
            <div className='d-flex justify-content-center align-items-center'>
              {loading && (
                <Spinner
                  animation='border'
                  style={{ height: '22.5px', width: '22.5px' }}
                />
              )}
              {!loading && (following ? 'Following' : 'Follow')}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
