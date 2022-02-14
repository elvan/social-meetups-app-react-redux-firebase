import { Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { MyTextArea } from '../../../components/form/MyTextArea';
import { MyTextInput } from '../../../components/form/MyTextInput';

export const ProfileForm = ({ profile }) => {
  return (
    <Formik
      initialValues={{
        errorMessage: '',
        displayName: profile.displayName,
        description: profile.description,
      }}
      validationSchema={Yup.object({
        displayName: Yup.string().required('Display name is required'),
        description: Yup.string().required('Description is required'),
      })}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        const { displayName, description } = values;
        const { id } = profile;
        const updatedProfile = {
          displayName,
          description,
        };
        try {
          // await updateProfile(id, updatedProfile);
        } catch (error) {
          setErrors({
            errorMessage: error.message,
          });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ dirty, isSubmitting, isValid }) => (
        <Form>
          {profile.errorMessage && (
            <div className='alert alert-danger'>{profile.errorMessage}</div>
          )}
          <MyTextInput
            name='displayName'
            label='Display Name'
            placeholder='Display Name'
            disabled={isSubmitting}
          />
          <MyTextArea
            name='description'
            label='Description'
            placeholder='Write your bio here...'
            disabled={isSubmitting}
          />
          <Button
            type='submit'
            variant='primary'
            disabled={!dirty || !isValid || isSubmitting}
          >
            Update Profile
          </Button>
        </Form>
      )}
    </Formik>
  );
};
