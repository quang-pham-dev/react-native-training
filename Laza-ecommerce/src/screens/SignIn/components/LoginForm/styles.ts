import { Platform, StyleSheet } from 'react-native';

// Themes
import Colors from 'themes/Colors';
import Fonts from 'themes/Fonts';
import Metrics from 'themes/Metrics';

export const styles = StyleSheet.create({
  main: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Metrics.padding.lg,
  },

  inputTitle: {
    alignSelf: 'flex-start',
    marginTop: Metrics.margin.lg,
  },
  input: {
    width: '100%',
    paddingVertical: Metrics.padding.xm,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
  },

  errorMessage: {
    alignSelf: 'flex-start',
    fontSize: Fonts.size.small,
    color: Colors.textRed,
  },

  forgotPasswordWrap: {
    marginTop: Metrics.margin.xxl,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: Metrics.margin.lg,
  },
  forgotPassword: {
    fontFamily: 'Inter_400Regular',
    fontSize: Fonts.size.normal,
    lineHeight: Fonts.lineHeight.base,
    color: Colors.textRed,
  },

  rememberMeWrap: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Metrics.margin.lg,
  },
  rememberMeText: {
    fontFamily: Fonts.fontFamily.Inter_500Medium,
    fontSize: Fonts.size.small,
    lineHeight: Fonts.lineHeight.xs,
    color: Colors.textBlack,
  },

  rememberMeSwitch: {
    transform:
      Platform.OS === 'android'
        ? [{ scaleX: 0.9 }, { scaleY: 0.9 }]
        : [{ scaleX: 0.6 }, { scaleY: 0.6 }],
  },

  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  footerTextWrapper: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: Metrics.margin.lg,
    marginBottom: Metrics.margin.xl,
  },
  condition: {
    textAlign: 'center',
    fontFamily: Fonts.fontFamily.Inter_400Regular,
    color: Colors.textGray,
    fontSize: Fonts.size.small,
    lineHeight: Fonts.lineHeight.sm,
  },
  Term: {
    color: Colors.textBlack,
    fontFamily: Fonts.fontFamily.Inter_500Medium,
  },

  bottomButton: {
    width: '100%',
    height: 75,
    paddingTop: Metrics.padding.xm,
    alignItems: 'center',
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
