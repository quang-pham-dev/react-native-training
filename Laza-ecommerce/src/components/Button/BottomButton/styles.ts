import { StyleSheet } from 'react-native';
// Styles
import { Metrics, Colors, Fonts } from '@styles/themes/index';

const styles = StyleSheet.create({
  button: {
    paddingVertical: Metrics.padding.md,
    paddingHorizontal: Metrics.padding.xl,
    alignItems: 'center',
  },
  title: {
    color: Colors.white,
    textTransform: 'none',
    fontFamily: Fonts.fontFamily.Inter_600SemiBold,
    fontSize: Fonts.size.sm,
    lineHeight: Fonts.lineHeight.lg,
  },
});

export default styles;
