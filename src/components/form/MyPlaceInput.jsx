import { useField } from 'formik';
import React from 'react';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import PlacesAutocomplete from 'react-places-autocomplete/dist/PlacesAutocomplete';

export const MyPlaceInput = ({ label, options = {}, ...props }) => {
  // @ts-ignore
  const [field, meta, helpers] = useField(props);

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => helpers.setValue({ address, latLng }))
      .catch((error) => helpers.setError(error));
  };

  const handleBlur = (event) => {
    field.onBlur(event);
    if (!field.value.latLng) {
      helpers.setValue({ address: '', latLng: null });
    }
  };

  return (
    <PlacesAutocomplete
      value={field.value['address']}
      onChange={(value) => helpers.setValue({ address: value })}
      onSelect={(value) => handleSelect(value)}
      searchOptions={options}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps }) => (
        <FormGroup controlId={props.name}>
          <FormLabel
            className={meta.touched && meta.error ? 'text-danger' : ''}
          >
            {label}
          </FormLabel>
          <FormControl
            {...getInputProps({
              name: field.name,
              onBlur: handleBlur,
              ...props,
            })}
            isInvalid={!!(meta.touched && meta.error)}
          />
          {suggestions?.length > 0 && (
            <div
              style={{
                position: 'absolute',
                zIndex: 1000,
                marginTop: 0,
              }}
            >
              <div className="list-group">
                {suggestions.map((suggestion) => (
                  <div
                    key={suggestion.placeId}
                    className="list-group-item list-group-item-action"
                    style={{ cursor: 'pointer' }}
                    {...getSuggestionItemProps(suggestion)}
                  >
                    <p className="mb-1">
                      {suggestion.formattedSuggestion.mainText}
                    </p>
                    <small className="text-muted">
                      {suggestion.formattedSuggestion.secondaryText}
                    </small>
                  </div>
                ))}
              </div>
            </div>
          )}
          {meta.touched && meta.error && (
            <>
              <FormControl.Feedback type="invalid" className="d-block">
                {meta.error['address']}
              </FormControl.Feedback>
            </>
          )}
        </FormGroup>
      )}
    </PlacesAutocomplete>
  );
};
