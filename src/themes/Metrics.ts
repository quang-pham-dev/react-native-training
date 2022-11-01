// Libs
import {Dimensions} from 'react-native'
import {mvs} from 'react-native-size-matters/extend'

import {VERTICAL_SCALE_FACTOR} from '@constants'
import {Colors} from './Colors'
import {Fonts} from './Fonts'

const {width, height} = Dimensions.get('window')
const screenWidth = width < height ? width : height
const screenHeight = width < height ? height : width

const Metrics = {
  screenHeight,
  screenWidth,

  padding: {
    tiny: 5,
    xs: 6,
    custom: 10,
    small: 12,
    medium: 15,
    mediumPlus: 20,
    large: 25,
    extraLarger: 30,
  },

  margin: {
    tiny: 5,
    xs: 7,
    small: 10,
    medium: 15,
    mediumPlus: 20,
    extraMedium: 30,
    large: 42,
    extraLarger: 76,
  },

  zIndex: {
    tiny: 1,
    small: 2,
    medium: 3,
    large: 10,
  },

  border: {
    tiny: 1,
    extraSmall: 1.5,
    small: 2,
    medium: 3,
    large: 5,
  },

  borderRadius: {
    none: 0,
    tiny: mvs(5, VERTICAL_SCALE_FACTOR),
    small: mvs(8, VERTICAL_SCALE_FACTOR),
    base: mvs(10, VERTICAL_SCALE_FACTOR),
    basePlus: mvs(12, VERTICAL_SCALE_FACTOR),
    medium: mvs(15, VERTICAL_SCALE_FACTOR),
    large: mvs(20, VERTICAL_SCALE_FACTOR),
  },

  shadowOffset: {
    tiny: 5,
    small: 10,
    medium: 15,
    large: 20,
  },

  rotate: {
    left: 'rotate(0deg)',
    right: 'rotate(180deg)',
    top: 'rotate(90deg)',
    bottom: 'rotate(270deg)',
  },

  icon: {
    tiny: {
      width: mvs(10, VERTICAL_SCALE_FACTOR),
      height: mvs(10, VERTICAL_SCALE_FACTOR),
    },
    small: {
      width: mvs(24, VERTICAL_SCALE_FACTOR),
      height: mvs(24, VERTICAL_SCALE_FACTOR),
    },
    medium: {
      width: mvs(58, VERTICAL_SCALE_FACTOR),
      height: mvs(58, VERTICAL_SCALE_FACTOR),
    },
    large: {
      width: mvs(120, VERTICAL_SCALE_FACTOR),
      height: mvs(120, VERTICAL_SCALE_FACTOR),
    },
    base: {
      width: mvs(20, VERTICAL_SCALE_FACTOR),
      height: mvs(20, VERTICAL_SCALE_FACTOR),
    },
  },

  heading: {
    h1: {
      color: Colors.palette.black,
      fontSize: Fonts.size.massive,
      lineHeight: Fonts.lineHeight.xxl,
      fontFamily: Fonts.type.interSemiBold,
    },
    h2: {
      color: Colors.palette.black,
      fontSize: 24,
      lineHeight: 29,
    },
    h4: {
      color: Colors.palette.gray,
      fontSize: Fonts.size.normal,
      lineHeight: Fonts.lineHeight.custom,
      fontFamily: Fonts.type.interRegular,
    },
  },

  paragraph: {
    tiny: {
      color: Colors.palette.black,
      fontSize: Fonts.size.tiny,
      lineHeight: Fonts.lineHeight.tiny,
      fontFamily: Fonts.type.interRegular,
    },
    small: {
      color: Colors.palette.black,
      fontSize: Fonts.size.normal,
      lineHeight: Fonts.lineHeight.tiny,
      fontFamily: Fonts.type.interRegular,
    },
    medium: {
      color: Colors.palette.black,
      fontSize: Fonts.size.medium,
      lineHeight: Fonts.lineHeight.md,
      fontFamily: Fonts.type.interRegular,
    },
    larger: {
      color: Colors.palette.black,
      fontSize: Fonts.size.large,
      lineHeight: Fonts.lineHeight.lg,
      fontFamily: Fonts.type.interSemiBold,
    },
    brand: {
      color: Colors.palette.black,
      fontSize: Fonts.size.normal,
      lineHeight: Fonts.lineHeight.custom,
      fontFamily: Fonts.type.interMedium,
    },
    productNameAndType: {
      color: Colors.palette.black,
      fontSize: Fonts.size.tiny,
      lineHeight: mvs(15.4, VERTICAL_SCALE_FACTOR),
      fontFamily: Fonts.type.interMedium,
    },
    productPrice: {
      color: Colors.palette.black,
      fontSize: Fonts.size.small,
      lineHeight: mvs(14.3, VERTICAL_SCALE_FACTOR),
      fontFamily: Fonts.type.interSemiBold,
    },
    alreadyAccount: {
      color: Colors.palette.gray,
      fontSize: Fonts.size.normal,
      lineHeight: Fonts.lineHeight.custom,
      fontFamily: Fonts.type.interRegular,
    },
    alreadySignIn: {
      color: Colors.palette.black,
      fontSize: Fonts.size.normal,
      lineHeight: Fonts.lineHeight.custom,
      fontFamily: Fonts.type.interMedium,
    },
    confirmAgree: {
      color: Colors.palette.gray,
      fontSize: Fonts.size.small,
      lineHeight: Fonts.lineHeight.sm,
      fontFamily: Fonts.type.interRegular,
    },
    termAndCondition: {
      color: Colors.palette.black,
      fontSize: Fonts.size.small,
      lineHeight: Fonts.lineHeight.custom,
      fontFamily: Fonts.type.interSemiBold,
    },
    profileUsername: {
      color: Colors.palette.black,
      fontSize: Fonts.size.medium,
      lineHeight: Fonts.lineHeight.sm,
      fontFamily: Fonts.type.interMedium,
    },
    profileVerified: {
      color: Colors.palette.gray,
      fontSize: Fonts.size.small,
      lineHeight: Fonts.lineHeight.xs,
      fontFamily: Fonts.type.interRegular,
    },
    profileItem: {
      color: Colors.palette.black,
      fontSize: Fonts.size.normal,
      lineHeight: Fonts.lineHeight.md,
      fontFamily: Fonts.type.interRegular,
    },
  },
  button: {
    bottom: {
      width: 'auto',
      height: mvs(75, VERTICAL_SCALE_FACTOR),
      bgColor: Colors.palette.primary,
      color: Colors.palette.white,
      fontSize: Fonts.size.medium,
      fontFamily: Fonts.type.interMedium,
      borderColor: Colors.palette.transparent,
      disableBgColor: Colors.palette.lightGray,
      disableColor: Colors.palette.white,
      disableBorderColor: Colors.palette.transparent,
    },
    social: {
      width: 'auto',
      height: mvs(50, VERTICAL_SCALE_FACTOR),
      borderRadius: mvs(20, VERTICAL_SCALE_FACTOR) / 2,
      borderColor: Colors.palette.transparent,
      color: Colors.palette.white,
      fontSize: Fonts.size.medium,
      fontFamily: Fonts.type.interSemiBold,
      disableBgColor: Colors.palette.lightGray,
      disableColor: Colors.palette.white,
      disableBorderColor: Colors.palette.transparent,
    },
  },
}

export default Metrics
