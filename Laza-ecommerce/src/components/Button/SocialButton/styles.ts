import { StyleSheet } from 'react-native';
// Styles
import { Metrics, Colors, Fonts } from '@styles/themes/index';

const styles = StyleSheet.create({
  button: {
    paddingVertical: Metrics.padding.md,
    paddingHorizontal: Metrics.padding.xl,
    alignItems: 'center',
    borderColor: Colors.transparent,
    borderWidth: 1,
    backgroundColor: Colors.white,
  },
  title: {
    color: Colors.white,
    textTransform: 'none',
    fontFamily: Fonts.fontFamily.Inter_600SemiBold,
    fontSize: Fonts.size.sm,
    lineHeight: Metrics.height.custom,
  },
  icon: {
    width: Metrics.icons.custom,
    height: Metrics.icons.custom,
  },
});

export default styles;
