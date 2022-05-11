import { StyleSheet } from 'react-native';
// Theme
import { Metrics, Colors, Fonts } from 'styles/themes';

const styles = StyleSheet.create({
  inputWrap: {
    width: '100%',
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: Fonts.size.small,
    lineHeight: Fonts.lineHeight.xs,
    fontFamily: Fonts.fontFamily.Inter_400Regular,
    color: Colors.textGray,
  },
  input: {
    width: '100%',
    fontFamily: Fonts.fontFamily.Inter_500Medium,
    fontSize: Fonts.size.normal,
    lineHeight: Fonts.lineHeight.base,
    paddingVertical: Metrics.padding.xm,
  },
});

export default styles;
