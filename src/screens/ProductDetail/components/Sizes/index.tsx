import React, {memo} from 'react'

// LIBS
import isEqual from 'react-fast-compare'
import {s, vs} from 'react-native-size-matters/extend'

// Styles
import FlexStyled from '@components/Flex/Flex.styles'
import PStyled from '@components/Paragraph/P.styles'
import ViewStyled from '@components/View/View.styles'

// Types
import {ProductSize} from '@model-types'

// Themes
import {Colors, Metrics} from '@themes'

// Constants
import {PARAGRAPH_TYPE} from '@constants'

type ProductSizeProps = {
  sizes: ProductSize[]
}

const Sizes = ({sizes}: ProductSizeProps) => (
  <ViewStyled.Custom pVertical={Metrics.padding.medium}>
    <FlexStyled.FlexSpaceBetweenCenter pBottom={s(Metrics.padding.custom)}>
      <PStyled.Base type={PARAGRAPH_TYPE.PRODUCT_DETAIL_TITLE_SECTION}>
        Size
      </PStyled.Base>
      <PStyled.Base type={PARAGRAPH_TYPE.PRODUCT_DETAIL_SIZE_GUIDE}>
        Size Guide
      </PStyled.Base>
    </FlexStyled.FlexSpaceBetweenCenter>

    <ViewStyled.ScrollViewWrapper
      horizontal
      showsHorizontalScrollIndicator={false}>
      {!!sizes &&
        sizes?.map((item: ProductSize) => (
          <FlexStyled.Custom key={item.id} pRight={s(9)}>
            <ViewStyled.Custom
              w={s(60)}
              h={s(60)}
              pVertical={vs(20)}
              pHorizontal={vs(20)}
              bgColor={Colors.palette.lightGray}
              bRadius={s(Metrics.borderRadius.base)}>
              <PStyled.Center>{item.size}</PStyled.Center>
            </ViewStyled.Custom>
          </FlexStyled.Custom>
        ))}
    </ViewStyled.ScrollViewWrapper>
  </ViewStyled.Custom>
)

export default memo(Sizes, isEqual)
