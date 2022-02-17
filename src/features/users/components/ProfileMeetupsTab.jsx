import { useCallback, useMemo, useState } from 'react';
import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Loading } from '../../../components/loading/Loading';
import { useFirestoreCollection } from '../../../hooks/useFirestoreCollection';
import { getUserMeetupsQuery } from '../services/userService';
import { listenToUserMeetups } from '../store/userActions';
import { ProfileMeetupCard } from './ProfileMeetupCard';

export const ProfileMeetupsTab = ({ profile }) => {
  const profileId = profile.id;
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState('future');

  const { loading, error } = useSelector((state) => state.asyncState);
  const { meetups } = useSelector((state) => state.userState);

  const queryMemo = useMemo(
    () => getUserMeetupsQuery(activeTab, profileId),
    [activeTab, profileId]
  );

  const listenCallback = useCallback(
    (userMeetups) => {
      return dispatch(listenToUserMeetups(userMeetups));
    },
    [dispatch]
  );

  useFirestoreCollection({
    queryMemo: queryMemo,
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
      {profile && meetups && (
        <div>
          <div className='mb-3'>
            <div className='d-flex justify-content-between align-items-start'>
              <div>
                <h5>Meetups</h5>
              </div>
            </div>
          </div>
          <Tabs activeKey={activeTab} onSelect={(tab) => setActiveTab(tab)}>
            <Tab eventKey='future' title='Future Meetups'>
              <Row>
                {!meetups.length && (
                  <Col className='col-6 p-3 mx-auto'>
                    <h5>No future meetups</h5>
                  </Col>
                )}
                {meetups.map((meetup) => (
                  <Col key={meetup.id} xs={4} className='p-3'>
                    <ProfileMeetupCard meetup={meetup} />
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey='past' title='Past Meetups'>
              <Row>
                {!meetups.length && (
                  <Col className='col-6 p-3 mx-auto'>
                    <h5>No past meetups</h5>
                  </Col>
                )}
                {meetups.map((meetup) => (
                  <Col key={meetup.id} xs={4} className='p-3'>
                    <ProfileMeetupCard meetup={meetup} />
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey='hosting' title='Hosting'>
              <Row>
                {!meetups.length && (
                  <Col className='col-6 p-3 mx-auto'>
                    <h5>No meetups hosted by this user</h5>
                  </Col>
                )}
                {meetups.map((meetup) => (
                  <Col key={meetup.id} xs={4} className='p-3'>
                    <ProfileMeetupCard meetup={meetup} />
                  </Col>
                ))}
              </Row>
            </Tab>
          </Tabs>
        </div>
      )}
    </>
  );
};
