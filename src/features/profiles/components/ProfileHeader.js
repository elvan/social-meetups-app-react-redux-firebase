import { useState } from 'react';
import { Spinner } from 'react-bootstrap';

export const ProfileHeader = () => {
  const [following, setFollowing] = useState(true);
  const [loading, setLoading] = useState(false);

  return (
    <div className='row'>
      <div className='col-md-8'>
        <div className='media'>
          <img
            src='/assets/user.png'
            alt='user'
            className='rounded-circle align-self-start mr-3'
            style={{ width: '100px' }}
          />
          <div className='media-body'>
            <h4 className='mt-0'>Example User</h4>
            <h6>Blogger</h6>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              distinctio iste est ducimus quidem aliquid, deserunt sunt fugiat
              dolore maiores laudantium sint voluptatibus quasi! Commodi fugit
              ullam voluptate assumenda amet.
            </p>
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
                ? 'btn btn-block btn-primary'
                : 'btn btn-block btn-outline-primary'
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
                  style={{ height: '23px', width: '23px' }}
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
