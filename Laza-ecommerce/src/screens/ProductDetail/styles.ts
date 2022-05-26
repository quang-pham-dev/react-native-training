import { StyleSheet } from 'react-native';

// Themes
import Colors from 'themes/Colors';
import Fonts from 'themes/Fonts';
import Metrics from 'themes/Metrics';

const styles = StyleSheet.create({
  Container: {
    // flex: 1,
    width: '100%',
    backgroundColor: Colors.primaryBackground,
  },
  headerContainer: {
    flex: 1,
    height: 418,
    width: '100%',
  },

  mainContainer: {
    flex: 3,
    width: '100%',
    backgroundColor: Colors.primaryBackground,
    paddingHorizontal: Metrics.padding.lg,
  },

  footerContainer: {
    flex: 1,
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
