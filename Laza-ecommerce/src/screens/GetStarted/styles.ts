import { StyleSheet } from 'react-native';

// Themes
import Colors from 'themes/Colors';
import Fonts from 'themes/Fonts';
import Metrics from 'themes/Metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
  },

  header: {
    flex: 1,
    marginTop: 45,
  },

  iconBackWrapper: {
    flexDirection: 'row',
    marginLeft: Metrics.margin.lg,
  },

  iconBack: {
    width: 45,
    height: 45,
  },

  headerTitle: {
    alignSelf: 'center',
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.fontFamily.Inter_600SemiBold,
    color: Colors.textBlack,

    paddingTop: Metrics.padding.xm,
  },

  main: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Metrics.padding.lg,
  },

  socialButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',

    marginBottom: Metrics.margin.sm,
    borderRadius: Metrics.borderRadius.roundedMedium,

    fontSize: Fonts.size.h5,
    color: Colors.white,
    paddingVertical: Metrics.padding.xm,
  },

  facebookButton: {
    backgroundColor: Colors.facebook,
  },

  socialIcon: {
    width: 22,
    height: 22,
  },

  text: {
    fontSize: Fonts.size.default,
    fontFamily: Fonts.fontFamily.Inter_600SemiBold,
    lineHeight: Fonts.lineHeight.lg,
    color: Colors.white,
  },

  twitterButton: {
    backgroundColor: Colors.twitter,
  },

  googleButton: {
    backgroundColor: Colors.google,
  },

  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  footerTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: Fonts.size.normal,
    marginBottom: Metrics.margin.xl,
  },

  alreadyText: {
    alignSelf: 'center',
    color: Colors.textGray,
    fontFamily: Fonts.fontFamily.Inter_400Regular,
  },

  signIn: {
    color: Colors.textBlack,
    fontFamily: Fonts.fontFamily.Inter_500Medium,
  },

  textBottomButton: {
    fontFamily: Fonts.fontFamily.Inter_500Medium,
    lineHeight: Fonts.lineHeight.sm,
  },

  bottomButton: {
    width: '100%',
    height: 75,
    paddingTop: Metrics.padding.xm,
    alignItems: 'center',
  },

  createAnAccountButton: {
    backgroundColor: Colors.primaryColor,
  },
});

export default styles;
