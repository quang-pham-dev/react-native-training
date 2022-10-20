import {mvs} from 'react-native-size-matters/extend'

import {VERTICAL_SCALE_FACTOR} from '@constants'

export const Fonts = {
  size: {
    tiny: mvs(11, VERTICAL_SCALE_FACTOR),
    small: mvs(12, VERTICAL_SCALE_FACTOR),
    normal: mvs(13, VERTICAL_SCALE_FACTOR),
    medium: mvs(15, VERTICAL_SCALE_FACTOR),
    large: mvs(17, VERTICAL_SCALE_FACTOR),
    huge: mvs(18, VERTICAL_SCALE_FACTOR),
    massive: mvs(20, VERTICAL_SCALE_FACTOR),
    xl: mvs(22, VERTICAL_SCALE_FACTOR),
    xxl: mvs(24, VERTICAL_SCALE_FACTOR),
  },

  lineHeight: {
    tiny: mvs(11, VERTICAL_SCALE_FACTOR),
    xxs: mvs(12, VERTICAL_SCALE_FACTOR),
    xs: mvs(14, VERTICAL_SCALE_FACTOR),
    md: mvs(16, VERTICAL_SCALE_FACTOR),
    sm: mvs(18, VERTICAL_SCALE_FACTOR),
    lg: mvs(22, VERTICAL_SCALE_FACTOR),
    xl: mvs(26, VERTICAL_SCALE_FACTOR),
    xxl: mvs(30, VERTICAL_SCALE_FACTOR),
  },

  type: {
    interRegular: 'Inter-Regular',
    interMedium: 'Inter-Medium',
    interSemiBold: 'Inter-SemiBold',
    interBold: 'Inter-Bold',
  },
}
