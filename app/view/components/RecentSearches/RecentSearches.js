import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {Card} from '@ant-design/react-native';

import styles from './styles';

const RecentSearches = () => {
  const recentVisitedPlaces = useSelector(state => state.searchState);
  return (
    <View>
      {recentVisitedPlaces.length === 0 ? (
        <View style={styles.emptyView}>
          <Text style={styles.emptyTxt}>No searched places</Text>
        </View>
      ) : (
        recentVisitedPlaces.map((place, index) => (
          <Card key={index}>{place?.formatted_address}</Card>
        ))
      )}
    </View>
  );
};

export default RecentSearches;
