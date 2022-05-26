import { Platform, StyleSheet } from 'react-native';

// Themes
import Colors from 'themes/Colors';
import Fonts from 'themes/Fonts';
import Metrics from 'themes/Metrics';

const styles = StyleSheet.create({
  descriptionContainer: {
    marginTop: Metrics.margin.lg,
  },

  textDescriptionTitle: {
    fontSize: Fonts.size.default,
    fontFamily: Fonts.fontFamily.Inter_600SemiBold,
    lineHeight: Fonts.lineHeight.sm,
    color: Colors.textBlack,
    marginBottom: Metrics.margin.sm,
  },
  textContent: {
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.fontFamily.Inter_400Regular,
    lineHeight: Fonts.lineHeight.lg,
    color: Colors.textGray,
  },
});

export default styles;
