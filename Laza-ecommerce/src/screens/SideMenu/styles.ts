import { Platform, StyleSheet } from 'react-native';

// Themes
import Colors from 'themes/Colors';
import Fonts from 'themes/Fonts';
import Metrics from 'themes/Metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Metrics.padding.lg,
  },

  header: {
    flex: 1,
  },

  iconMenuWrapper: {
    flexDirection: 'row',
    marginTop: Metrics.margin.xxxl,
  },

  iconMenu: {
    width: 45,
    height: 45,
  },

  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Metrics.margin.xxl,
  },

  profileInfoWrapper: {
    justifyContent: 'space-between',
    marginLeft: Metrics.margin.xm,
  },

  profile: {
    flexDirection: 'row',
  },

  verifiedWrapper: {
    flexDirection: 'row',
  },

  verifiedText: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.fontFamily.Inter_400Regular,
    color: Colors.textGray,
  },
  accountName: {
    fontSize: Fonts.size.default,
    fontFamily: Fonts.fontFamily.Inter_500Medium,
    color: Colors.textBlack,
  },

  iconBadge: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },

  orderInfo: {
    padding: Metrics.padding.sm,
    backgroundColor: Colors.secondaryBackground,
    borderRadius: Metrics.borderRadius.roundedSmall,
  },
  textOrder: {
    fontSize: Fonts.size.min,
    fontFamily: Fonts.fontFamily.Inter_500Medium,
    color: Colors.textGray,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45,
    resizeMode: 'cover',
  },

  icons: {
    width: 19,
    height: 19,
    resizeMode: 'contain',
    marginRight: Metrics.margin.md,
  },

  text: {
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.fontFamily.Inter_400Regular,
    lineHeight: Fonts.lineHeight.base,
  },

  main: {
    flex: 2,
  },
  darkModeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  switchWrapper: {},

  darkModeSwitch: {
    marginBottom: -20,
    transform:
      Platform.OS === 'android'
        ? [{ scaleX: 0.9 }, { scaleY: 0.9 }]
        : [{ scaleX: 0.6 }, { scaleY: 0.6 }],
  },

  footer: {
    flex: 1,
    justifyContent: 'center',
  },

  logoutText: {
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.fontFamily.Inter_500Medium,
    color: Colors.textLogout,
  },
});

export default styles;
