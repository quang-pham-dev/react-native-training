import React, {memo} from 'react'

// LIBS
import isEqual from 'react-fast-compare'
import {s} from 'react-native-size-matters/extend'

// Styles
import FlexStyled from '@components/Flex/Flex.styles'
import {Image} from '@components/Image/Image.styles'
import ViewStyled from '@components/View/View.styles'

// Types
import {ImageReviewerProps} from '@model-types'

type ImagesPreviewProps = {
  imagesPreview?: ImageReviewerProps[]
}
export const ImagesPreview = ({imagesPreview}: ImagesPreviewProps) => (
  <ViewStyled.ScrollViewWrapper
    horizontal
    showsHorizontalScrollIndicator={false}>
    {!!imagesPreview &&
      imagesPreview?.map(item => (
        <FlexStyled.Default key={item.id}>
          <Image.Normal
            width={s(77)}
            height={s(77)}
            mRight={s(10)}
            source={{uri: item.image}}
            resizeMode="cover"
          />
        </FlexStyled.Default>
      ))}
  </ViewStyled.ScrollViewWrapper>
)

export default memo(ImagesPreview, isEqual)
