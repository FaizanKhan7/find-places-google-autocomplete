import React, {useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';

const Map = ({markers, initialRegion}) => {
  const [region, setRegion] = useState(initialRegion);

  useEffect(() => {
    setRegion(initialRegion);
  }, [initialRegion]);

  useEffect(() => {
    if (markers.length === 1) {
      const marker = markers[0];
      setRegion({
        latitude: marker.latitude,
        longitude: marker.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }, [markers]);

  return (
    <MapView
      style={styles.container}
      region={region}
      showsUserLocation={true}
      showsMyLocationButton={true}
      zoomEnabled={true}
      scrollEnabled={true}>
      {markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={marker.title}
          description={marker.description}
        />
      ))}
    </MapView>
  );
};

export default Map;
