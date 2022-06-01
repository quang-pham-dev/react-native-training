import { Platform, StyleSheet } from 'react-native';

// Themes
import Colors from 'themes/Colors';
import Fonts from 'themes/Fonts';
import Metrics from 'themes/Metrics';

const styles = StyleSheet.create({
  productInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Metrics.margin.xm,
  },

  productInfoWrapper: {
    justifyContent: 'space-between',
  },

  textTitle: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.fontFamily.Inter_400Regular,
    lineHeight: Fonts.lineHeight.xs,
    color: Colors.textGray,
  },

  textValue: {
    fontSize: Fonts.size.large + 2,
    fontFamily: Fonts.fontFamily.Inter_600SemiBold,
    lineHeight: Fonts.lineHeight.xl - 2,
    color: Colors.textBlack,
    paddingTop: Metrics.padding.xs,
  },
});

export default styles;
