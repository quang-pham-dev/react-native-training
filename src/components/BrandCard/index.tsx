import React, {memo, useCallback} from 'react'

// LIBS
import isEqual from 'react-fast-compare'
import FastImage from 'react-native-fast-image'
import {s} from 'react-native-size-matters/extend'

// Types
import {BrandCardProps} from '@model-types'

// Styles
import {BrandCardWrapperStyled, ImageWrapperStyled} from './BrandCard.styles'
import PStyled from '@components/Paragraph/P.styles'
import {Image} from '@components/Image/Image.styles'
import FlexStyled from '@components/Flex/Flex.styles'

// Constants
import {PARAGRAPH_TYPE} from '@constants'

const BrandCard = ({brand, onPressBrandCard}: BrandCardProps) => {
  const {id, name, url} = brand || {}
  // handle action press card brand
  const handlePressBrandCard = useCallback(() => {
    onPressBrandCard(id)
  }, [id, onPressBrandCard])

  return (
    <BrandCardWrapperStyled onPress={handlePressBrandCard}>
      <FlexStyled.RowCenterHorizontal>
        <ImageWrapperStyled>
          <Image.Normal
            alignSelf="center"
            height={s(40)}
            width={s(40)}
            source={{
              uri: url,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </ImageWrapperStyled>
        <PStyled.Base type={PARAGRAPH_TYPE.BRAND}>{name}</PStyled.Base>
      </FlexStyled.RowCenterHorizontal>
    </BrandCardWrapperStyled>
  )
}

export default memo(BrandCard, isEqual)
