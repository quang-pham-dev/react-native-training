import { StyleSheet } from 'react-native';

// Themes
import Fonts from 'themes/Fonts';
import Metrics from 'themes/Metrics';
import Colors from 'themes/Colors';

const styles = StyleSheet.create({
  sizeContainer: {
    width: '100%'
  },

  textSizeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  textSizeGuide: {
    fontSize: Fonts.size.default,
    color: Colors.primaryColor
  },

  sizeWrapper: {
    width: '100%',
    marginTop: 10
  },

  sizeItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: Metrics.borderRadius.roundedMedium,
    backgroundColor: Colors.secondaryBackground,
    marginRight: 10
  }
});

export default styles;
