import { StyleSheet } from 'react-native';

// Themes
import { height } from 'themes/Dimensions';
import Colors from 'themes/Colors';
import Fonts from 'themes/Fonts';
import Metrics from 'themes/Metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
    height
  },

  header: { flex: 1, marginTop: Metrics.margin.xxxl },

  iconBackWrapper: {
    flexDirection: 'row',
    marginLeft: Metrics.margin.lg
  },

  headerTitle: {
    marginTop: Metrics.margin.xm
  },

  headerSubTitle: {
    marginTop: Metrics.padding.xsm
  },

  loginForm: {
    flex: 2
  }
});
