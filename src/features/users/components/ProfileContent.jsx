import { useEffect, useState } from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { ProfileAboutTab } from './ProfileAboutTab';
import { ProfileFriendshipTab } from './ProfileFriendshipTab';
import { ProfileMeetupsTab } from './ProfileMeetupsTab';
import { ProfilePhotosTab } from './ProfilePhotosTab';

export const ProfileContent = ({ currentUser, profile }) => {
  const location = useLocation();

  const [key, setKey] = useState('tab-1');

  useEffect(() => {
    setKey('tab-1');
  }, [location]);

  return (
    <Tab.Container
      id='left-tabs-example'
      activeKey={key}
      onSelect={(key) => setKey(key)}
    >
      <Row>
        <Col sm={3}>
          <Nav variant='pills' className='flex-column'>
            <Nav.Item>
              <Nav.Link eventKey='tab-1'>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='tab-2'>Photos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='tab-3'>Meetups</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='tab-4'>Followers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='tab-5'>Following</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey='tab-1'>
              <ProfileAboutTab currentUser={currentUser} profile={profile} />
            </Tab.Pane>
            <Tab.Pane eventKey='tab-2'>
              <ProfilePhotosTab currentUser={currentUser} profile={profile} />
            </Tab.Pane>
            <Tab.Pane eventKey='tab-3'>
              <ProfileMeetupsTab profile={profile} />
            </Tab.Pane>
            <Tab.Pane eventKey='tab-4'>
              <ProfileFriendshipTab
                activeTab='followers'
                profile={profile}
                currentUser={currentUser}
              />
            </Tab.Pane>
            <Tab.Pane eventKey='tab-5'>
              <ProfileFriendshipTab
                activeTab='following'
                profile={profile}
                currentUser={currentUser}
              />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};
