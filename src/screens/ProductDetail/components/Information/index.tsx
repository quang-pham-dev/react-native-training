import React, {memo} from 'react'

// Libs
import isEqual from 'react-fast-compare'
import {vs} from 'react-native-size-matters/extend'

// Styles
import PStyled from '@components/Paragraph/P.styles'
import FlexStyled from '@components/Flex/Flex.styles'

// Constants
import {PARAGRAPH_TYPE} from '@constants'
import ViewStyled from '@components/View/View.styles'

// Themes
import {Metrics} from '@themes'

type InformationProps = {
  name?: string
  type?: string
  price?: number
}

const Information = ({name, type, price}: InformationProps) => {
  return (
    <ViewStyled.Custom pVertical={vs(Metrics.padding.medium)}>
      <FlexStyled.FlexSpaceBetween pBottom={vs(8)}>
        <PStyled.Base type={PARAGRAPH_TYPE.PRODUCT_DETAIL_TITLE}>
          {name}
        </PStyled.Base>
        <PStyled.Base type={PARAGRAPH_TYPE.PRODUCT_DETAIL_TITLE}>
          Price
        </PStyled.Base>
      </FlexStyled.FlexSpaceBetween>

      <FlexStyled.FlexSpaceBetween>
        <PStyled.Base type={PARAGRAPH_TYPE.PRODUCT_DETAIL_CONTENT_TITLE}>
          {type}
        </PStyled.Base>
        <PStyled.Base>{`$${price}`}</PStyled.Base>
      </FlexStyled.FlexSpaceBetween>
    </ViewStyled.Custom>
  )
}

export default memo(Information, isEqual)
