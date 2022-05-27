import { StyleSheet } from 'react-native';

// Themes
import Colors from 'themes/Colors';
import Fonts from 'themes/Fonts';
import Metrics from 'themes/Metrics';

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    backgroundColor: Colors.primaryBackground,
  },
  headerContainer: {
    height: 418,
    width: '100%',
  },

  mainContainer: {
    width: '100%',
    backgroundColor: Colors.primaryBackground,
    paddingHorizontal: Metrics.padding.lg,
  },

  footerContainer: {
    width: '100%',
  },

  bottomButton: {
    width: '100%',
    height: 75,
    paddingTop: Metrics.padding.xm,
    alignItems: 'center',
    bottom: 0,
  },
  loginButton: {
    backgroundColor: Colors.primaryColor,
  },
  textBottomButton: {
    fontSize: Fonts.size.default,
    fontFamily: Fonts.fontFamily.Inter_500Medium,
    color: Colors.white,
    lineHeight: Fonts.lineHeight.sm,
  },
});

export default styles;
