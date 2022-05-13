import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from 'styles/themes';
import Colors from 'styles/themes/Colors';
import Dimensions from 'styles/themes/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
    height: Dimensions.height,
  },

  header: { flex: 1 },

  iconBack: {
    width: 45,
    height: 45,
    marginTop: Metrics.margin.xxxl,
  },

  iconBackWrapper: {
    flexDirection: 'row',
    marginLeft: Metrics.margin.lg,
  },

  headerTitle: {
    alignSelf: 'center',
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.fontFamily.Inter_600SemiBold,
    lineHeight: Fonts.lineHeight.xxl,
    color: Colors.textBlack,
    paddingHorizontal: Metrics.margin.lg,

    marginTop: Metrics.margin.xm,
  },

  headerSubTitle: {
    alignSelf: 'center',
    fontSize: Fonts.size.normal,
    lineHeight: Fonts.lineHeight.base,
    fontFamily: Fonts.fontFamily.Inter_400Regular,
    color: Colors.textGray,
    paddingTop: Metrics.padding.xsm,
  },

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
    transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }],
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
