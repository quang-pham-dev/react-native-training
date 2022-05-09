import { StyleSheet } from 'react-native';
// Theme
import { Metrics, Colors, Fonts } from 'styles/themes';

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
  },

  input: {
    flex: 1,
    color: Colors.textBlack,
    lineHeight: Fonts.lineHeight.base,
    paddingVertical: Metrics.padding.xm,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
  },
});

export default styles;
