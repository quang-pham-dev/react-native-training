import { Platform, StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from 'styles/themes';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.lightGray,
  },

  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.primaryBackground,
  },

  headerContainer: {
    height: 418,
    backgroundColor: Colors.lightGray,
    alignItems: 'center',
  },

  actionsWrapper: {
    position: 'absolute',
    width: '100%',
    marginTop: Platform.OS === 'android' ? 40 : 45,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Metrics.padding.lg,
  },

  headerImageWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  backIcon: {
    width: Metrics.icons.semiLarge,
    height: Metrics.icons.semiLarge,
  },

  cartIcon: {
    width: Metrics.icons.semiLarge,
    height: Metrics.icons.semiLarge,
  },

  productImageReview: {
    flexDirection: 'row',
    marginVertical: Metrics.margin.xm,
  },

  productImageReviewWrapper: {
    width: 77,
    height: 77,
    marginRight: 9,
  },

  imagePreview: {
    width: '100%',
    height: '100%',
  },

  contentContainer: {
    top: -25,
    flex: 1,
    paddingHorizontal: Metrics.margin.lg,
    backgroundColor: Colors.primaryBackground,
  },

  productInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Metrics.margin.xm,
  },

  productInfoWrapper: {
    justifyContent: 'space-between',
  },

  textTitle: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.fontFamily.Inter_400Regular,
    lineHeight: Fonts.lineHeight.xs,
    color: Colors.textGray,
  },

  textValue: {
    fontSize: Fonts.size.large + 2,
    fontFamily: Fonts.fontFamily.Inter_600SemiBold,
    lineHeight: Fonts.lineHeight.xl - 2,
    color: Colors.textBlack,
    paddingTop: Metrics.padding.xs,
  },

  descriptionContainer: {
    marginTop: Metrics.margin.lg,
  },

  textDescriptionTitle: {
    fontSize: Fonts.size.default,
    fontFamily: Fonts.fontFamily.Inter_600SemiBold,
    lineHeight: Fonts.lineHeight.sm,
    color: Colors.textBlack,
    marginBottom: Metrics.margin.sm,
  },

  reviewContainer: {
    marginTop: Metrics.margin.lg,
  },

  reviewTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textReviewTitle: {
    fontSize: Fonts.size.default,
    fontFamily: Fonts.fontFamily.Inter_600SemiBold,
    lineHeight: Fonts.lineHeight.sm,
    color: Colors.textBlack,
  },

  reviewWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  reviewItem: {
    justifyContent: 'center',
  },

  reviewItemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Metrics.margin.xm,
  },

  reviewerInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  imageAvatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  reviewerItemInfo: {
    marginLeft: Metrics.margin.xm,
  },

  reviewTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.margin.xs,
  },

  imageClock: {
    width: Metrics.icons.small,
    height: Metrics.icons.small,
  },

  textDate: {
    fontSize: Fonts.size.min,
    fontFamily: Fonts.fontFamily.Inter_500Medium,
    lineHeight: Fonts.lineHeight.xxs,
    color: Colors.textGray,
    marginLeft: Metrics.margin.xsm,
  },

  textName: {
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.fontFamily.Inter_500Medium,
    lineHeight: Fonts.lineHeight.base,
  },
  reviewItemRating: {},

  ratingTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingTextPoint: {
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.fontFamily.Inter_500Medium,
    lineHeight: Fonts.lineHeight.base,
    color: Colors.textBlack,
  },
  ratingText: {
    fontSize: Fonts.size.min,
    fontFamily: Fonts.fontFamily.Inter_400Regular,
    lineHeight: Fonts.lineHeight.xxs,
    color: Colors.textGray,
    marginLeft: Metrics.margin.xsm,
  },

  imageStar: {
    width: 57,
    height: 13,
  },
  reviewItemContent: {
    marginTop: Metrics.margin.sm,
  },
  textContent: {
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.fontFamily.Inter_400Regular,
    lineHeight: Fonts.lineHeight.lg,
    color: Colors.textGray,
  },

  totalPriceContainer: {
    marginTop: Metrics.margin.lg,
  },
  totalPriceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textTotalWrapper: {},
  textTotalPrice: {
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.fontFamily.Inter_600SemiBold,
    lineHeight: Fonts.lineHeight.base,
    color: Colors.textBlack,
  },
  textVAT: {
    fontSize: Fonts.size.min,
    fontFamily: Fonts.fontFamily.Inter_400Regular,
    lineHeight: Fonts.lineHeight.xxs,
    color: Colors.textGray,
    paddingTop: Metrics.padding.xsm,
  },
  textPrice: {
    fontSize: Fonts.size.default,
    fontFamily: Fonts.fontFamily.Inter_600SemiBold,
    lineHeight: Fonts.lineHeight.sm,
    color: Colors.textBlack,
  },

  footerContainer: {},

  bottomButton: {
    width: '100%',
    height: 75,
    paddingTop: Metrics.padding.xm,
    alignItems: 'center',
    bottom: 0,
    zIndex: 1,
  },
  loginButton: {
    backgroundColor: Colors.primaryColor,
  },
  textBottomButton: {
    fontSize: Fonts.size.default,
    fontFamily: Fonts.fontFamily.Inter_500Medium,
    color: Colors.white,
    lineHeight: Fonts.lineHeight.sm,
  },
});

export default styles;
