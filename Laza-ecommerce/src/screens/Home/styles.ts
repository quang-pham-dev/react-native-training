import { Platform, StyleSheet } from 'react-native';

// Themes
import Colors from 'themes/Colors';
import Fonts from 'themes/Fonts';
import Metrics from 'themes/Metrics';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
    paddingHorizontal: Metrics.padding.lg
  },

  header: {
    marginTop: Platform.OS === 'android' ? Metrics.margin.lg : 0
  },
  body: {
    marginBottom: Platform.OS === 'android' ? 250 : 200
  },
  headerTitleWrapper: {
    flexDirection: 'row',
    marginTop: Metrics.margin.xm
  },

  userNameTitle: {
    fontSize: Fonts.size.large,
    marginLeft: Metrics.margin.sm
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  productTitle: {
    marginTop: Metrics.margin.xm
  },
  brandTitle: {
    paddingBottom: Metrics.padding.xm
  }
});

export default styles;
