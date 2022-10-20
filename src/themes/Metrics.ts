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
    large: 24,
    extraLarger: 36,
  },

  margin: {
    tiny: 5,
    xs: 7,
    small: 10,
    medium: 15,
    mediumPlus: 20,
    extraMedium: 26,
    large: 38,
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

  heading: {
    h1: {
      color: Colors.palette.black,
      fontSize: Fonts.size.xxl,
      lineHeight: Fonts.lineHeight.lg,
    },
    h2: {
      color: Colors.palette.black,
      fontSize: 24,
      lineHeight: 29,
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
  },
}

export default Metrics
