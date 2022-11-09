import React from 'react'

// LIBS
import {vs} from 'react-native-size-matters/extend'

// Styles
import FlexStyled from '@components/Flex/Flex.styles'
import PStyled from '@components/Paragraph/P.styles'
import ViewStyled from '@components/View/View.styles'

// Types

// Themes
import {Metrics} from '@themes'

// Constants
import {PARAGRAPH_TYPE} from '@constants'

type TotalPriceProps = {
  vatPrice: number
}

const TotalPrice = ({vatPrice = 0}: TotalPriceProps) => (
  <ViewStyled.Custom pVertical={Metrics.padding.mediumPlus}>
    <FlexStyled.FlexSpaceBetweenCenter>
      <FlexStyled.RowCenterHorizontal>
        <FlexStyled.Default>
          <PStyled.Base
            type={PARAGRAPH_TYPE.PRODUCT_DETAIL_REVIEWS_USERNAME}
            mBottom={vs(Metrics.margin.tiny)}>
            Total Price
          </PStyled.Base>

          <FlexStyled.RowCenter>
            <PStyled.Base
              type={PARAGRAPH_TYPE.PRODUCT_DETAIL_REVIEWS_DATE_TIME}>
              with VAT,SD
            </PStyled.Base>
          </FlexStyled.RowCenter>
        </FlexStyled.Default>
      </FlexStyled.RowCenterHorizontal>

      <FlexStyled.Default>
        <FlexStyled.RowCenterHorizontal>
          <PStyled.Base type={PARAGRAPH_TYPE.PRODUCT_DETAIL_REVIEWS_USERNAME}>
            {`$${vatPrice}`}
          </PStyled.Base>
        </FlexStyled.RowCenterHorizontal>
      </FlexStyled.Default>
    </FlexStyled.FlexSpaceBetweenCenter>
  </ViewStyled.Custom>
)

export default TotalPrice
