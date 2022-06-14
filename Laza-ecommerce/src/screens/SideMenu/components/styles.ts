import { StyleSheet } from 'react-native';

// Themes
import Metrics from 'themes/Metrics';
import Fonts from 'themes/Fonts';

const styles = StyleSheet.create({
  boxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.margin.xl
  },

  icons: {
    width: 19,
    height: 19,
    resizeMode: 'contain',
    marginRight: Metrics.margin.md
  },

  text: {
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.fontFamily.Inter_400Regular,
    lineHeight: Fonts.lineHeight.base
  }
});

export default styles;
