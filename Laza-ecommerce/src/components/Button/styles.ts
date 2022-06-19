import { StyleSheet } from 'react-native';

// Themes
import Colors from 'themes/Colors';
import Fonts from 'themes/Fonts';
import Metrics from 'themes/Metrics';

const styles = StyleSheet.create({
  backButton: {
    width: 45,
    height: 45
  },
  icon: {},

  socialButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: Metrics.margin.sm,
    borderRadius: Metrics.borderRadius.roundedMedium,

    paddingVertical: Metrics.padding.xm
  },

  bottomButton: {
    width: '100%',
    height: 75,
    paddingTop: Metrics.padding.xm,
    alignItems: 'center',
    backgroundColor: Colors.primaryColor
  },

  text: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: Fonts.size.default,
    fontFamily: Fonts.fontFamily.Inter_500Medium,
    lineHeight: Fonts.lineHeight.sm
  }
});
export default styles;
