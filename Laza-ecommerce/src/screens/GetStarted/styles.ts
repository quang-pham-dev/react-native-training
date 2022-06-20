import { StyleSheet } from 'react-native';

// Themes
import Colors from 'themes/Colors';
import Fonts from 'themes/Fonts';
import Metrics from 'themes/Metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackground
  },

  header: {
    flex: 1,
    marginTop: 45
  },

  iconBackWrapper: {
    marginLeft: Metrics.margin.lg
  },

  headerTitle: {
    paddingTop: Metrics.padding.xm
  },

  main: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Metrics.padding.lg
  },

  footer: {
    flex: 1,
    justifyContent: 'flex-end'
  },

  footerTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: Metrics.margin.xl
  },

  alreadyText: {
    color: Colors.textGray
  },

  signIn: {
    color: Colors.textBlack
  }
});

export default styles;
