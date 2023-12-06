import React from 'react';
import {View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import styles from './styles';

const AutoCompleteInput = ({onPlaceSelected}) => {
  return (
    <View zIndex={10}>
      <View style={styles.searchSection}>
        <GooglePlacesAutocomplete
          placeholder="Search for a place"
          query={{key: 'AIzaSyB9XiiGf_Lnq_abc7GzhkJkX8MS6INop6s'}}
          fetchDetails={true}
          onPress={
            (data, details = null) => onPlaceSelected(data, details) // Call the onPlaceSelected function with selected data
          }
          onFail={error => console.log(error)}
          onNotFound={() => console.log('no results')}
          styles={{
            textInputContainer: styles.inputContainer,
            textInput: styles.searchBox,
            listView: styles.searchListContainer,
          }}
        />
      </View>
    </View>
  );
};

export default AutoCompleteInput;
