import { StyleSheet } from 'react-native';

// Themes
import Colors from 'themes/Colors';
import Metrics from 'themes/Metrics';

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    backgroundColor: Colors.primaryBackground
  },
  headerContainer: {
    width: '100%'
  },

  mainContainer: {
    width: '100%',
    backgroundColor: Colors.primaryBackground,
    paddingHorizontal: Metrics.padding.lg
  }
});

export default styles;
