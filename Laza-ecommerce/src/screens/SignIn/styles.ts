import { StyleSheet } from 'react-native';

// Themes
import { height } from 'themes/Dimensions';
import Colors from 'themes/Colors';
import Fonts from 'themes/Fonts';
import Metrics from 'themes/Metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
    height
  },

  header: { flex: 1 },

  iconBack: {
    width: 45,
    height: 45,
    marginTop: Metrics.margin.xxxl
  },

  iconBackWrapper: {
    flexDirection: 'row',
    marginLeft: Metrics.margin.lg
  },

  headerTitle: {
    alignSelf: 'center',
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.fontFamily.Inter_600SemiBold,
    lineHeight: Fonts.lineHeight.xxl,
    color: Colors.textBlack,
    paddingHorizontal: Metrics.margin.lg,

    marginTop: Metrics.margin.xm
  },

  headerSubTitle: {
    alignSelf: 'center',
    fontSize: Fonts.size.normal,
    lineHeight: Fonts.lineHeight.base,
    fontFamily: Fonts.fontFamily.Inter_400Regular,
    color: Colors.textGray,
    paddingTop: Metrics.padding.xsm
  },
  loginForm: {
    flex: 2
  }
});
