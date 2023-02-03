import { useField } from 'formik';
import React from 'react';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';

export const MyTextArea = ({ label = '', ...props }) => {
  // @ts-ignore
  const [field, meta] = useField(props);

  return (
    <FormGroup controlId={props.name}>
      {label && (
        <FormLabel className={meta.touched && meta.error ? 'text-danger' : ''}>
          {label}
        </FormLabel>
      )}
      <FormControl
        as="textarea"
        isInvalid={!!(meta.touched && meta.error)}
        {...field}
        {...props}
        rows={3}
      />
      {meta.touched && meta.error && (
        <>
          <FormControl.Feedback type="invalid" className="d-block">
            {meta.error}
          </FormControl.Feedback>
        </>
      )}
    </FormGroup>
  );
};
