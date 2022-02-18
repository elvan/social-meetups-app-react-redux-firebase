import { formatDistance } from 'date-fns';
import { useEffect } from 'react';
import { FaComments } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Loading } from '../../../components/loading/Loading';
import {
  databaseObjectToArray,
  getMeetupCommentsRef,
} from '../services/chatServices';
import {
  GET_MEETUP_COMMENTS_ERROR,
  GET_MEETUP_COMMENTS_REQUEST,
  GET_MEETUP_COMMENTS_SUCCESS,
} from '../store/meetupConstants';
import { MeetupChatForm } from './MeetupChatForm';

export const MeetupDetailsChat = ({ meetupId }) => {
  const dispatch = useDispatch();

  const { authenticated } = useSelector((state) => state.authState);
  const { comments, commentsIsLoading, commentsError } = useSelector(
    (state) => state.meetupState
  );

  useEffect(() => {
    dispatch({ type: GET_MEETUP_COMMENTS_REQUEST });
    getMeetupCommentsRef(meetupId).on('value', (snapshot) => {
      if (!snapshot.exists()) {
        dispatch({
          type: GET_MEETUP_COMMENTS_ERROR,
          payload: 'No comments yet',
        });
        return;
      }
      dispatch({
        type: GET_MEETUP_COMMENTS_SUCCESS,
        payload: databaseObjectToArray(snapshot.val()).reverse(),
      });
    });

    return () => {
      getMeetupCommentsRef(meetupId).off();
    };
  }, [dispatch, meetupId]);

  if (commentsIsLoading) {
    return <Loading />;
  }

  return (
    <div className='bg-white shadow rounded'>
      <div className='card mb-5'>
        <div className='card-header bg-info text-white'>
          <div className='d-flex justify-content-center align-items-center'>
            <FaComments size={15} className='mr-2' />
            Chat About This Meetup
          </div>
        </div>

        <div className='card-body pt-3 pb-2'>
          {comments.length === 0 && (
            <div className='text-center'>
              <h5>{commentsError}</h5>
            </div>
          )}
          {comments.length > 0 &&
            comments.map((comment) => (
              <div key={comment.id} className='media mb-2'>
                <Link to={`/profiles/${comment.uid}` || '/assets/user.png'}>
                  <img
                    src={comment.photoURL}
                    className='align-self-start mr-3 rounded-circle'
                    alt='a man'
                    width={50}
                  />
                </Link>
                <div className='media-body'>
                  <h6>
                    <Link to={`/profiles/${comment.uid}`}>
                      {comment.displayName}
                    </Link>
                  </h6>
                  <p className='mb-2'>
                    {comment.text.split('\n').map((text, index) => (
                      <span key={`${comment.id}-${index}`}>
                        {text}
                        <br />
                      </span>
                    ))}
                  </p>
                  <p className='text-muted mb-2'>
                    {formatDistance(comment.date, new Date())}
                  </p>
                </div>
              </div>
            ))}
        </div>

        <div className='card-body pt-2 pb-3'>
          {authenticated ? (
            <MeetupChatForm meetupId={meetupId} />
          ) : (
            <>
              <h5 className='text-center'>
                You need to be logged in to comment
              </h5>
              <div className='d-flex justify-content-center'>
                <Link to={`/login`} className='btn btn-info'>
                  Login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
