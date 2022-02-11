import cuid from 'cuid';
import { Form, Formik } from 'formik';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { MySelectInput } from '../../../../components/form/MySelectInput';
import { MyTextArea } from '../../../../components/form/MyTextArea';
import { MyTextInput } from '../../../../components/form/MyTextInput';
import { categoryOptions } from '../../data/categoryOptions';
import { createMeetup, updateMeetup } from '../../store/meetupActions';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('You must provide a title'),
  date: Yup.date().required('You must provide a date'),
  category: Yup.string().required('You must provide a category'),
  description: Yup.string().required('You must provide a description'),
  city: Yup.string().required('You must provide a city'),
  venue: Yup.string().required('You must provide a venue'),
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

  return (
    <Row>
      <Col xs={12} md={8} className='mb-3'>
        <div className='rounded bg-white p-3 shadow'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
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
                    hostPhotoUrl:
                      'https://randomuser.me/api/portraits/men/1.jpg',
                    attendees: [],
                  })
                );
                history.push('/meetups');
              }
            }}
          >
            <Form>
              <fieldset>
                <legend className='text-info'>Meetup Details</legend>
                <MyTextInput name='title' label='Title' />
                <MyTextInput name='date' type='date' label='Date' />
                <MySelectInput
                  name='category'
                  label='Category'
                  options={categoryOptions}
                />
                <MyTextArea name='description' label='Description' />
              </fieldset>

              <fieldset>
                <legend className='text-info'>Location Details</legend>
                <MyTextInput name='city' label='City' />
                <MyTextInput name='venue' label='Venue' />
              </fieldset>

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
