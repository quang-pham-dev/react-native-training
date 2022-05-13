import { Platform, StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from 'styles/themes';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
  },
  homeMain: {
    flex: 1,
    paddingHorizontal: Metrics.margin.lg,
  },
  header: {
    flex: 2,
    marginTop: Platform.OS === 'android' ? Metrics.margin.xxxl : 0,
  },
  body: {
    flex: 5,
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
});

export default styles;
