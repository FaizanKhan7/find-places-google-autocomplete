import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {AutoCompleteInput, RecentSearches} from './app/view/components';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <View>
          <Text style={styles.title}>Find Places 📍🌏</Text>
        </View>

        <AutoCompleteInput />
        <RecentSearches />
      </ScrollView>
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
