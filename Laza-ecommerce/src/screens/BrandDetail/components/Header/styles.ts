import { Platform, StyleSheet } from 'react-native';

// Themes
import Colors from 'themes/Colors';
import Metrics from 'themes/Metrics';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: Platform.OS === 'android' ? 40 : 45,
    position: 'absolute',
    backgroundColor: Colors.primaryBackground
  },

  brandLogoWrapper: {
    height: 45,
    width: 70,
    padding: Metrics.padding.sm,
    borderRadius: 10,
    backgroundColor: Colors.secondaryBackground
  },

  brandLogo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});

export default styles;
