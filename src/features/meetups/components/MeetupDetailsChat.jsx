import { FaComments } from 'react-icons/fa';
import { MeetupChatForm } from './MeetupChatForm';

export const MeetupDetailsChat = ({ meetupId }) => {
  return (
    <div className='bg-white shadow rounded'>
      <div className='card mb-5'>
        <div className='card-header bg-info text-white'>
          <div className='d-flex justify-content-center align-items-center'>
            <FaComments size={15} className='mr-2' />
            Chat About This Meetup
          </div>
        </div>

        <div className='card-body'>
          <div className='media'>
            <img
              src='https://randomuser.me/api/portraits/men/9.jpg'
              className='align-self-start mr-3 rounded-circle'
              alt='a man'
              width={50}
            />
            <div className='media-body'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis animi esse debitis culpa cupiditate, eveniet distinctio
                ea voluptatem hic numquam aperiam id dolorum voluptatum
                laboriosam dolor ad earum cumque maiores!
              </p>
            </div>
          </div>

          <div className='media'>
            <img
              src='https://randomuser.me/api/portraits/men/13.jpg'
              className='align-self-start mr-3 rounded-circle'
              alt='a man'
              width={50}
            />
            <div className='media-body'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti magnam, tempora sit doloremque earum incidunt quidem
                unde eos nulla ratione a asperiores. Ut ipsum neque tempora
                ducimus in blanditiis adipisci.
              </p>
            </div>
          </div>
        </div>

        <div className='card-body'>
          <MeetupChatForm meetupId={meetupId} />
        </div>
      </div>
    </div>
  );
};
