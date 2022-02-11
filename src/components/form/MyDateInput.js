import { useField, useFormikContext } from 'formik';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './MyDateInput.css';

export const MyDateInput = ({ label, ...props }) => {
  // @ts-ignore
  const [field, meta, helpers] = useField(props);
  const { setFieldValue } = useFormikContext();

  return (
    <FormGroup controlId={props.name}>
      <FormLabel className={meta.touched && meta.error ? 'text-danger' : ''}>
        {label}
      </FormLabel>
      <FormControl
        as={ReactDatePicker}
        isInvalid={!!(meta.touched && meta.error)}
        selected={(field.value && new Date(field.value)) || null}
        timeFormat='HH:mm'
        showTimeSelect
        timeCaption='Time'
        dateFormat='MMMM d, yyyy h:mm aa'
        autoComplete='off'
        {...field}
        {...props}
        onChange={(value) => setFieldValue(field.name, value)}
        onBlur={() => helpers.setTouched(true)}
      />
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
