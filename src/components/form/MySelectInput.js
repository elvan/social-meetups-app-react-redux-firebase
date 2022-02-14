import { useField } from 'formik';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';

export const MySelectInput = ({ label, options, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <FormGroup controlId={props.name}>
      <FormLabel className={meta.touched && meta.error ? 'text-danger' : ''}>
        {label}
      </FormLabel>
      <FormControl
        as='select'
        isInvalid={!!(meta.touched && meta.error)}
        {...field}
        {...props}
        onChange={(event) => helpers.setValue(event.target.value)}
        onBlur={() => helpers.setTouched(true)}
      >
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.text}
          </option>
        ))}
      </FormControl>
      {meta.touched && meta.error && (
        <>
          <FormControl.Feedback type='invalid' className='d-block'>
            {meta.error}
          </FormControl.Feedback>
        </>
      )}
    </FormGroup>
  );
};
