import cuid from 'cuid';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { Button, Col, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createMeetup, updateMeetup } from '../../store/meetupActions';

export const MeetupFormPage = ({ history, match }) => {
  const selectedMeetup = useSelector((state) =>
    // @ts-ignore
    state.meetupState.meetups.find((meetup) => meetup.id === match.params.id)
  );

  const dispatch = useDispatch();

  const initialValues = selectedMeetup ?? {
    title: '',
    date: '',
    category: '',
    city: '',
    venue: '',
    description: '',
  };

  const [values, setValues] = useState(initialValues);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (selectedMeetup) {
      dispatch(
        updateMeetup({
          ...selectedMeetup,
          ...values,
        })
      );
      history.push(`/meetups/${selectedMeetup.id}`);
    } else {
      dispatch(
        createMeetup({
          ...values,
          id: cuid(),
          hostedBy: 'Cristiano',
          hostPhotoUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
          attendees: [],
        })
      );
      history.push('/meetups');
    }
  };

  return (
    <Row>
      <Col xs={12} md={8} className='mb-3'>
        <div className='rounded bg-white p-3 shadow'>
          {selectedMeetup ? (
            <h4>Edit the Meetup</h4>
          ) : (
            <h4>Create New Meetup</h4>
          )}

          <hr />

          <Formik
            initialValues={initialValues}
            onSubmit={(values) => console.log(values)}
          >
            <Form>
              <FormGroup controlId='title'>
                <FormLabel>Title</FormLabel>
                <Field className='form-control' id='title' name='title' />
              </FormGroup>

              <FormGroup controlId='date'>
                <FormLabel>Date</FormLabel>
                <Field
                  className='form-control'
                  id='date'
                  name='date'
                  type='date'
                />
              </FormGroup>

              <FormGroup controlId='category'>
                <FormLabel>Category</FormLabel>
                <Field className='form-control' id='category' name='category' />
              </FormGroup>

              <FormGroup controlId='city'>
                <FormLabel>City</FormLabel>
                <Field className='form-control' id='city' name='city' />
              </FormGroup>

              <FormGroup controlId='venue'>
                <FormLabel>Venue</FormLabel>
                <Field className='form-control' id='venue' name='venue' />
              </FormGroup>

              <FormGroup controlId='description'>
                <FormLabel>Description</FormLabel>
                <Field
                  as='textarea'
                  className='form-control'
                  id='description'
                  name='description'
                  rows={5}
                />
              </FormGroup>

              <Button variant='success' type='submit' className='mr-2'>
                Submit
              </Button>

              <Button as={Link} to='/meetups' variant='light' type='button'>
                Cancel
              </Button>
            </Form>
          </Formik>
        </div>
      </Col>
      <Col xs={12} md={4} className='mb-3'>
        <h4>Sidebar</h4>
      </Col>
    </Row>
  );
};
