import cuid from 'cuid';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { Button, Col, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { createMeetup, updateMeetup } from '../../store/meetupActions';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  date: Yup.date().required('Date is required'),
  category: Yup.string().required('Category is required'),
  venue: Yup.string().required('Venue is required'),
  city: Yup.string().required('City is required'),
  description: Yup.string().required('Description is required'),
});

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
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
          >
            <Form>
              <FormGroup controlId='title'>
                <FormLabel>Title</FormLabel>
                <Field className='form-control' id='title' name='title' />
                <ErrorMessage
                  component='div'
                  name='title'
                  className='invalid-feedback d-block'
                />
              </FormGroup>

              <FormGroup controlId='date'>
                <FormLabel>Date</FormLabel>
                <Field
                  className='form-control'
                  id='date'
                  name='date'
                  type='date'
                />
                <ErrorMessage
                  component='div'
                  name='date'
                  className='invalid-feedback d-block'
                />
              </FormGroup>

              <FormGroup controlId='category'>
                <FormLabel>Category</FormLabel>
                <Field className='form-control' id='category' name='category' />
                <ErrorMessage
                  component='div'
                  name='category'
                  className='invalid-feedback d-block'
                />
              </FormGroup>

              <FormGroup controlId='venue'>
                <FormLabel>Venue</FormLabel>
                <Field className='form-control' id='venue' name='venue' />
                <ErrorMessage
                  component='div'
                  name='venue'
                  className='invalid-feedback d-block'
                />
              </FormGroup>

              <FormGroup controlId='city'>
                <FormLabel>City</FormLabel>
                <Field className='form-control' id='city' name='city' />
                <ErrorMessage
                  component='div'
                  name='city'
                  className='invalid-feedback d-block'
                />
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
                <ErrorMessage
                  component='div'
                  name='description'
                  className='invalid-feedback d-block'
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
