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
    alignSelf: 'center',
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.fontFamily.Inter_600SemiBold,
    color: Colors.textBlack,

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
    fontSize: Fonts.size.normal,
    marginBottom: Metrics.margin.xl
  },

  alreadyText: {
    alignSelf: 'center',
    color: Colors.textGray,
    fontFamily: Fonts.fontFamily.Inter_400Regular
  },

  signIn: {
    color: Colors.textBlack,
    fontFamily: Fonts.fontFamily.Inter_500Medium
  }
});

export default styles;
