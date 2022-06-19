import { Platform, StyleSheet } from 'react-native';

// Themes
import Colors from 'themes/Colors';
import Fonts from 'themes/Fonts';
import Metrics from 'themes/Metrics';
import { height } from 'themes/Dimensions';

const styles = StyleSheet.create({
  headerContainer: {
    height: height * 0.5,
    backgroundColor: Colors.lightGray,
    alignItems: 'center'
  },

  actionsWrapper: {
    position: 'absolute',
    width: '100%',
    marginTop: Platform.OS === 'android' ? 40 : 45,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Metrics.padding.lg
  },

  headerImageWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
});

export default styles;
