import {Image} from 'expo-image';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const App = () => {
  // render
  return (
    <View style={styles.root}>
      <Image
        tintColor={'red'}
        style={styles.image}
        source={require('./settings.svg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: 24,
    height: 24,
    tintColor: 'red',
  },
});
