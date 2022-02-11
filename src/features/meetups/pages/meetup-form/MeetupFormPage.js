import cuid from 'cuid';
import { Formik } from 'formik';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

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
            {({ handleChange, handleSubmit, values }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId='title'>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type='text'
                    name='title'
                    value={values.title}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId='date'>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type='date'
                    name='date'
                    value={values.date}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId='category'>
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type='text'
                    name='category'
                    value={values.category}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId='city'>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type='text'
                    name='city'
                    value={values.city}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId='venue'>
                  <Form.Label>Venue</Form.Label>
                  <Form.Control
                    type='text'
                    name='venue'
                    value={values.venue}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId='title'>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as='textarea'
                    name='description'
                    value={values.description}
                    onChange={handleChange}
                    rows={5}
                  />
                </Form.Group>

                <Button variant='success' type='submit' className='mr-2'>
                  Submit
                </Button>
                <Button as={Link} to='/meetups' variant='light' type='button'>
                  Cancel
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Col>
      <Col xs={12} md={4} className='mb-3'>
        <h4>Sidebar</h4>
      </Col>
    </Row>
  );
};
