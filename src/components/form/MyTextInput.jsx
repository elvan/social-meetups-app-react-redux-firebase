import { useField } from 'formik';
import React from 'react';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';

export const MyTextInput = ({ label, ...props }) => {
  // @ts-ignore
  const [field, meta] = useField(props);

  return (
    <FormGroup controlId={props.name}>
      <FormLabel className={meta.touched && meta.error ? 'text-danger' : ''}>
        {label}
      </FormLabel>
      <FormControl
        isInvalid={!!(meta.touched && meta.error)}
        {...field}
        {...props}
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
