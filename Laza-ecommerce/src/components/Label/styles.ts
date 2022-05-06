import { StyleSheet } from 'react-native';
// Themes
import { Colors, Fonts, Metrics } from 'styles/themes';

const styles = StyleSheet.create({
  labelText: {
    fontSize: Fonts.size.sm,
    color: Colors.textBlack,
  },

  labelContainerBorder: {
    borderWidth: 1,
    borderColor: Colors.textGray,
    backgroundColor: Colors.white,
  },

  labelContainer: {
    borderRadius: Metrics.borderRadius.roundedBase,
    paddingVertical: Metrics.padding.sm,
    paddingHorizontal: Metrics.padding.base,
    backgroundColor: Colors.primaryBackground,
  },
});

export default styles;
