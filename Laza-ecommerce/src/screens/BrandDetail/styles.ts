import { Platform, StyleSheet } from 'react-native';

// Themes
import Colors from 'themes/Colors';
import Fonts from 'themes/Fonts';
import Metrics from 'themes/Metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: Colors.primaryBackground
  },
  headerContainer: {
    height: 120
  },

  actionsWrapper: {
    position: 'absolute',
    marginTop: Platform.OS === 'android' ? 40 : 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },

  contentContainer: {
    flex: 1,
    paddingBottom: Metrics.padding.xxl
  },

  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  sortWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.secondaryBackground,
    padding: Metrics.padding.sm,
    borderRadius: 10
  },

  sortText: {
    marginLeft: Metrics.margin.xsm
  },

  titleContent: {
    marginTop: Metrics.margin.xsm
  }
});

export default styles;
