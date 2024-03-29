import { Form, Formik } from 'formik';
import React from 'react';
import { FaComment } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { MyTextArea } from '../../../components/form/MyTextArea';
import { addMeetupChatComment } from '../services/chatServices';

export const MeetupChatForm = ({
  meetupId,
  parentId,
  closeForm,
  replyToCommentId = '',
  replyToDisplayName = '',
}) => {
  return (
    <Formik
      initialValues={{ comment: '' }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        try {
          await addMeetupChatComment(meetupId, {
            ...values,
            parentId,
            replyToCommentId,
            replyToDisplayName,
          });
          resetForm();
          closeForm();
        } catch (error) {
          toast.error(error.message);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <MyTextArea
            name="comment"
            placeholder="Please enter your comment here"
            rows={3}
            disabled={isSubmitting}
          />

          <button
            className="btn btn-info btn-block"
            type="submit"
            disabled={isSubmitting}
          >
            <div className="d-flex justify-content-center align-items-center">
              <FaComment size={15} className="mr-2" />
              Send Message
            </div>
          </button>
        </Form>
      )}
    </Formik>
  );
};
