import { Platform, StyleSheet } from 'react-native';

// Themes
import Colors from 'themes/Colors';
import Fonts from 'themes/Fonts';
import Metrics from 'themes/Metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: Colors.primaryBackground
  },
  headerContainer: {
    height: 120
  },

  actionsWrapper: {
    position: 'absolute',
    marginTop: Platform.OS === 'android' ? 40 : 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },

  backIcon: {
    width: Metrics.icons.semiLarge,
    height: Metrics.icons.semiLarge
  },

  cartIcon: {
    width: Metrics.icons.semiLarge,
    height: Metrics.icons.semiLarge
  },

  brandLogoWrapper: {
    height: 45,
    width: 70,
    padding: Metrics.padding.sm,
    borderRadius: 10,
    backgroundColor: Colors.secondaryBackground
  },
  brandLogo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  contentContainer: {
    flex: 1,
    paddingBottom: Metrics.padding.xxl
  },

  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  totalCount: {
    fontSize: Fonts.size.default,
    lineHeight: Fonts.lineHeight.sm,
    fontFamily: Fonts.fontFamily.Inter_500Medium,
    color: Colors.textBlack
  },
  sortWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.secondaryBackground,
    padding: Metrics.padding.sm,
    borderRadius: 10
  },

  sortText: {
    marginLeft: Metrics.margin.xsm
  },

  titleContent: {
    fontSize: Fonts.size.normal,
    lineHeight: Fonts.lineHeight.base,
    fontFamily: Fonts.fontFamily.Inter_400Regular,
    color: Colors.textGray,
    marginTop: Metrics.margin.xsm
  }
});

export default styles;
