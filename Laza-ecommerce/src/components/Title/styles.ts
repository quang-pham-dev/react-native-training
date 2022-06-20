import { StyleSheet } from 'react-native';

// Themes
import Colors from 'themes/Colors';
import Fonts from 'themes/Fonts';

const styles = StyleSheet.create({
  title: {
    textTransform: 'none',
    color: Colors.black,
    fontSize: Fonts.size.default,
    lineHeight: Fonts.lineHeight.base,
    fontFamily: Fonts.fontFamily.Inter_500Medium
  },

  titleAlign: {
    textAlign: 'center'
  },

  titleCenter: {
    textAlign: 'center'
  },

  titleLeft: {
    textAlign: 'left'
  },

  titleRight: {
    textAlign: 'right'
  },

  headingPage: {
    fontSize: Fonts.size.h5,
    lineHeight: Fonts.lineHeight.xxl,
    fontFamily: Fonts.fontFamily.Inter_600SemiBold
  },

  subHeadingPage: {
    color: Colors.textGray,
    fontSize: Fonts.size.normal,
    lineHeight: Fonts.lineHeight.base,
    fontFamily: Fonts.fontFamily.Inter_400Regular
  },

  titleLeftSection: {
    fontSize: Fonts.size.default,
    lineHeight: Fonts.lineHeight.base,
    fontFamily: Fonts.fontFamily.Inter_500Medium
  },

  titleRightSection: {
    color: Colors.textGray,
    fontSize: Fonts.size.small,
    lineHeight: Fonts.lineHeight.xs,
    fontFamily: Fonts.fontFamily.Inter_400Regular
  }
});

export default styles;
