import React, {memo, useCallback} from 'react'

// LIBS
import isEqual from 'react-fast-compare'

// Types
import {IBrand} from '@model-types'

// Styles
import {BrandCardWrapperStyled, ImageWrapperStyled} from './BrandCard.styles'
import PStyled from '@components/Paragraph/P.styles'
import {Image} from '@components/Image/Image.styles'
import FlexStyled from '@components/Flex/Flex.styles'

// Constants
import {PARAGRAPH_TYPE} from '@constants'

type BrandCardProps = {
  brand: IBrand
  onPressBrandCard: (id: string) => void
}

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
            source={{
              uri: url,
            }}
            resizeMode="contain"
          />
        </ImageWrapperStyled>
        <PStyled.Base type={PARAGRAPH_TYPE.BRAND}>{name}</PStyled.Base>
      </FlexStyled.RowCenterHorizontal>
    </BrandCardWrapperStyled>
  )
}

export default memo(BrandCard, isEqual)
