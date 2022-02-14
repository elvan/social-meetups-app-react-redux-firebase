import { Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { MyTextArea } from '../../../components/form/MyTextArea';
import { MyTextInput } from '../../../components/form/MyTextInput';
import { updateUserProfile } from '../store/userActions';

export const ProfileForm = ({ profile, setEditMode }) => {
  const dispatch = useDispatch();

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
        setSubmitting(true);
        const { displayName, description } = values;
        const updatedProfile = {
          displayName,
          description,
        };
        try {
          await dispatch(updateUserProfile(updatedProfile));
          toast.success('Profile updated successfully');
          setEditMode(false);
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
