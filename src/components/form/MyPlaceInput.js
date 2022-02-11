import { useField } from 'formik';
import { useState } from 'react';
import { FormControl, FormGroup, FormLabel, ListGroup } from 'react-bootstrap';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import PlacesAutocomplete from 'react-places-autocomplete/dist/PlacesAutocomplete';

export const MyPlaceInput = ({ label, options, ...props }) => {
  // @ts-ignore
  const [field, meta, helpers] = useField(props);

  const [address, setAddress] = useState({});

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => helpers.setValue({ address, latLng }))
      .catch((error) => helpers.setError(error));
    setAddress(address);
  };

  return (
    <PlacesAutocomplete
      value={field.value['address']}
      onChange={(value) => helpers.setValue(value)}
      onSelect={(value) => handleSelect(value)}
      searhOptions={options}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <FormGroup controlId={props.name}>
          <FormLabel
            className={meta.touched && meta.error ? 'text-danger' : ''}
          >
            {label}
          </FormLabel>
          <FormControl
            {...getInputProps({
              name: field.name,
              ...props,
            })}
            isInvalid={!!(meta.touched && meta.error)}
          />
          {suggestions?.length > 0 && (
            <div
              style={{
                position: 'absolute',
                zIndex: 1000,
                width: '100%',
                marginTop: 0,
              }}
            >
              <ListGroup>
                {suggestions.map((suggestion) => {
                  <ListGroup.Item
                    key={suggestion.placeId}
                    {...getSuggestionItemProps(suggestion)}
                  >
                    <p>{suggestion.formattedSuggestion.mainText}</p>
                    <p>{suggestion.formattedSuggestion.secondaryText}</p>
                  </ListGroup.Item>;
                })}
              </ListGroup>
            </div>
          )}
          {meta.touched && meta.error && (
            <>
              <FormControl.Feedback type='invalid' className='d-block'>
                {meta.error}
              </FormControl.Feedback>
            </>
          )}
        </FormGroup>
      )}
    </PlacesAutocomplete>
  );
};
