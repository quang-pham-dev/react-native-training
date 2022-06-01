import { StyleSheet } from 'react-native';

// Themes
import Colors from 'themes/Colors';
import Fonts from 'themes/Fonts';
import Metrics from 'themes/Metrics';

const styles = StyleSheet.create({
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
    width: '100%',
    justifyContent: 'space-between',
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
  reviewItemRating: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

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

  textTitle: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.fontFamily.Inter_400Regular,
    lineHeight: Fonts.lineHeight.xs,
    color: Colors.textGray,
  },
});

export default styles;
