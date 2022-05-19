import { Platform, StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from 'styles/themes';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
  },

  homeMain: {
    flex: 1,
    paddingHorizontal: Metrics.padding.lg,
  },
  header: {
    marginTop: Platform.OS === 'android' ? Metrics.margin.lg : 0,
  },
  body: {
    flex: 1,
  },
  headerTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.margin.xm,
  },
  headerTitle: {
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.fontFamily.Inter_600SemiBold,
    lineHeight: Fonts.lineHeight.xxl,
    color: Colors.textBlack,
  },
  userNameTitle: {
    alignSelf: 'flex-end',
    fontSize: Fonts.size.large,
    fontFamily: Fonts.fontFamily.Inter_500Medium,
    color: Colors.textBlack,
    lineHeight: Fonts.lineHeight.xxl,
    marginLeft: Metrics.margin.sm,
  },
  subTitle: {
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.fontFamily.Inter_400Regular,
    color: Colors.textGray,
    marginTop: Metrics.margin.xsm,
  },
  productTitle: {
    marginTop: Metrics.margin.xm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
