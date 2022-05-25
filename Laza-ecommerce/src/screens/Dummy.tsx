import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DummyScreen = () => {
  return (
    <View style={styles.container}>
      <Text>APP VERSION NOT YET DEVELOPED</Text>
    </View>
  );
};

export default DummyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
