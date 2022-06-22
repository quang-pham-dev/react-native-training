import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  switch: {
    transform:
      Platform.OS === 'android'
        ? [{ scaleX: 0.9 }, { scaleY: 0.9 }]
        : [{ scaleX: 0.6 }, { scaleY: 0.6 }]
  }
});

export default styles;
