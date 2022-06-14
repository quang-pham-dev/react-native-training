import { StyleSheet } from 'react-native';

// Themes
import Fonts from 'themes/Fonts';
import Metrics from 'themes/Metrics';
import Colors from 'themes/Colors';

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%'
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: Fonts.size.small,
    lineHeight: Fonts.lineHeight.xs,
    fontFamily: Fonts.fontFamily.Inter_400Regular,
    color: Colors.textGray
  },

  inputWrapper: {
    justifyContent: 'center'
  },

  input: {
    width: '100%',
    fontFamily: Fonts.fontFamily.Inter_500Medium,
    fontSize: Fonts.size.normal,
    lineHeight: Fonts.lineHeight.base,
    paddingVertical: Metrics.padding.xm
  },

  icon: {
    width: Metrics.icons.standard,
    position: 'absolute',
    right: 0
  }
});

export default styles;
