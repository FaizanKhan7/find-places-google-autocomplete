import React from 'react';
import {View} from 'react-native';
import Config from 'react-native-config';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import styles from './styles';

const AutoCompleteInput = ({onPlaceSelected}) => {
  return (
    <View zIndex={10}>
      <View style={styles.searchSection}>
        <GooglePlacesAutocomplete
          placeholder="Search for a place"
          query={{key: Config.GOOGLE_MAPS_API_KEY}}
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
