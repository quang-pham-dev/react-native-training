import React from 'react'

// Libs
import {s} from 'react-native-size-matters/extend'

// Components
import MoreLessText from '@components/LessMoreText'

// Styles
import PStyled from '@components/Paragraph/P.styles'

// Constants
import {PARAGRAPH_TYPE} from '@constants'

// Themes
import {Metrics} from '@themes'

type DescriptionProps = {
  description?: string
}

const Description = ({description}: DescriptionProps) => (
  <>
    <PStyled.Base
      mBottom={s(Metrics.margin.medium)}
      type={PARAGRAPH_TYPE.PRODUCT_DETAIL_TITLE_SECTION}>
      Description
    </PStyled.Base>
    {Boolean(description) && (
      <MoreLessText numberOfLines={3}>{description}</MoreLessText>
    )}
  </>
)

export default Description
