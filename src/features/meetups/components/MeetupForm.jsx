/* global google */

import { Form, Formik } from 'formik';
import { useState } from 'react';
import { Button, Col, Modal, Row, Spinner } from 'react-bootstrap';
import {
  FaCalendarCheck,
  FaCalendarTimes,
  FaChevronCircleLeft,
  FaSave,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { MyDateInput } from '../../../components/form/MyDateInput';
import { MyPlaceInput } from '../../../components/form/MyPlaceInput';
import { MySelectInput } from '../../../components/form/MySelectInput';
import { MyTextArea } from '../../../components/form/MyTextArea';
import { MyTextInput } from '../../../components/form/MyTextInput';
import { categoryOptions } from '../data/categoryOptions';
import { toggleMeetupCancelInFirestore } from '../services/meetupService';
import { createMeetup, updateMeetup } from '../store/meetupActions';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('You must provide a title'),
  date: Yup.date().required('You must provide a date'),
  category: Yup.string().required('You must provide a category'),
  description: Yup.string().required('You must provide a description'),
  city: Yup.object().shape({
    address: Yup.string().required('You must provide a city'),
  }),
  venue: Yup.object().shape({
    address: Yup.string().required('You must provide a city'),
  }),
});

export const MeetupForm = ({ meetup, history }) => {
  const dispatch = useDispatch();

  let meetupData = meetup ?? {
    title: '',
    date: '',
    category: '',
    description: '',
    city: {
      address: '',
      latLng: {
        lat: 0,
        lng: 0,
      },
    },
    venue: {
      address: '',
      latLng: {
        lat: 0,
        lng: 0,
      },
    },
  };

  const [showModal, setShowModal] = useState(false);

  const { pending } = useSelector((state) => state.meetupState);

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);

    if (meetup?.id) {
      dispatch(updateMeetup(values));
      history.push(`/meetups/${meetup?.id}`);
    } else {
      dispatch(createMeetup(values));
      history.push('/meetups');
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    toggleMeetupCancelInFirestore(meetup);
    setShowModal(false);
  };

  return (
    <>
      {meetup && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Meetup {meetup.isCancelled ? ' Reactivation' : ' Cancellation'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to
            {meetup.isCancelled ? ' reactivate ' : ' cancel '}
            this meetup?
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Not sure
            </Button>
            <Button
              variant={meetup.isCancelled ? 'success' : 'danger'}
              onClick={handleConfirm}
            >
              Yes, I am sure
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <Row>
        <Col xs={12} md={8} className='mb-3'>
          <div className='rounded bg-white p-3 shadow'>
            <Formik
              initialValues={meetupData}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ dirty, values, isSubmitting, isValid }) => (
                <Form>
                  <fieldset>
                    <legend className='text-info'>Meetup Details</legend>
                    <MyTextInput
                      name='title'
                      label='Title'
                      disabled={pending}
                    />
                    <MyDateInput name='date' label='Date' />
                    <MySelectInput
                      name='category'
                      label='Category'
                      options={categoryOptions}
                    />
                    <MyTextArea name='description' label='Description' />
                  </fieldset>

                  <fieldset>
                    <legend className='text-info'>Location Details</legend>
                    <MyPlaceInput name='city' label='City' />
                    <MyPlaceInput
                      name='venue'
                      label='Venue'
                      disabled={!values.city.latLng}
                      options={{
                        location: new google.maps.LatLng(values.city.latLng),
                        radius: 1000,
                        types: ['establishment'],
                      }}
                    />
                  </fieldset>

                  <div className='d-flex'>
                    <Button
                      disabled={!dirty || !isValid || isSubmitting}
                      variant='primary'
                      type='submit'
                      className='mr-2'
                    >
                      <div className='d-flex align-items-center'>
                        {isSubmitting ? (
                          <Spinner animation='border' className='mr-2' />
                        ) : (
                          <FaSave className='mr-2' />
                        )}
                        Save Meetup
                      </div>
                    </Button>

                    <Button
                      disabled={isSubmitting}
                      as={Link}
                      to='/meetups'
                      variant='light'
                      type='button'
                    >
                      <div className='d-flex align-items-center'>
                        <FaChevronCircleLeft className='mr-2' />
                        Back to Meetups
                      </div>
                    </Button>

                    {meetup?.id && (
                      <Button
                        variant={meetup.isCancelled ? 'success' : 'danger'}
                        disabled={isSubmitting}
                        type='button'
                        className='ml-auto'
                        onClick={handleShow}
                      >
                        <div className='d-flex align-items-center'>
                          {isSubmitting ? (
                            <Spinner animation='border' className='mr-2' />
                          ) : (
                            <>
                              {meetup.isCancelled ? (
                                <FaCalendarCheck className='mr-2' />
                              ) : (
                                <FaCalendarTimes className='mr-2' />
                              )}
                            </>
                          )}
                          {meetup.isCancelled
                            ? 'Reactivate Meetup'
                            : 'Cancel Meetup'}
                        </div>
                      </Button>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Col>
        <Col xs={12} md={4} className='mb-3'>
          <h4>Sidebar</h4>
        </Col>
      </Row>
    </>
  );
};
