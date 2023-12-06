import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {AutoCompleteInput, RecentSearches} from './app/view/components';
import MapView from './app/view/components/Map/Map';

function App(): JSX.Element {
  interface Place {
    latitude: number;
    longitude: number;
    title: string;
    description: string;
  }

  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [initialRegion, setInitialRegion] = useState({
    latitude: 37.78825, // Your default latitude
    longitude: -122.4324, // Your default longitude
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const markers = selectedPlace ? [selectedPlace] : [];

  const handlePlaceSelected = (data: any, details: any) => {
    // Process the selected place data and update state
    setSelectedPlace({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      title: details.name,
      description: details.formatted_address,
    });

    // Update initialRegion to center the map on the selected place
    setInitialRegion({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Find Places 📍🌏</Text>
        </View>

        <AutoCompleteInput onPlaceSelected={handlePlaceSelected} />
        <MapView
          markers={markers}
          initialRegion={initialRegion}
          region={initialRegion}
        />
        <RecentSearches />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    position: 'absolute',
    top: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginTop: 8,
    marginBottom: 16,
  },
});

export default App;
