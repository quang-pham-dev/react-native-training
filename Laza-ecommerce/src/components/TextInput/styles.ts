import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from 'styles/themes';

// Colors

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
  },

  input: {
    flex: 1,
    color: Colors.textBlack,
    lineHeight: Fonts.lineHeight.base,
    paddingVertical: Metrics.padding.base,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
  },
});

export default styles;
