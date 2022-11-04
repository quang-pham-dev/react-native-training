import React, {memo} from 'react'

// LIBS
import isEqual from 'react-fast-compare'
import {s, vs} from 'react-native-size-matters/extend'

// Components
import MoreLessText from '@components/LessMoreText'

// Types
import {ReviewerProps} from '@model-types'

// Themes
import {Icons, Metrics} from '@themes'

// Styles
import ViewStyled from '@components/View/View.styles'
import FlexStyled from '@components/Flex/Flex.styles'
import PStyled from '@components/Paragraph/P.styles'
import IconStyled from '@components/Icon/Icon.styles'
import {Image} from '@components/Image/Image.styles'

// Constants
import {PARAGRAPH_TYPE} from '@constants'

type ReviewsProps = {
  comment: string
  rating: string
  reviewers: ReviewerProps
}

const Reviews = ({comment, rating, reviewers}: ReviewsProps) => {
  const {name, date, image} = reviewers || []

  return (
    <ViewStyled.Custom mTop={s(Metrics.margin.medium)}>
      <FlexStyled.FlexSpaceBetweenCenter>
        <PStyled.Base type={PARAGRAPH_TYPE.PRODUCT_DETAIL_TITLE_SECTION}>
          Reviews
        </PStyled.Base>
        <PStyled.Base type={PARAGRAPH_TYPE.PRODUCT_DETAIL_REVIEWS_VIEW_ALL}>
          View All
        </PStyled.Base>
      </FlexStyled.FlexSpaceBetweenCenter>
      {/* End of reviews Title */}

      <ViewStyled.Custom pTop={s(Metrics.padding.medium)}>
        <FlexStyled.FlexSpaceBetweenCenter>
          <FlexStyled.RowCenterHorizontal>
            <Image.Normal
              alignSelf="center"
              height={s(40)}
              width={s(40)}
              source={{
                uri: image,
              }}
              borderRadius={vs(40)}
              resizeMode="cover"
              mRight={s(Metrics.padding.custom)}
            />

            <FlexStyled.Default>
              <PStyled.Base
                type={PARAGRAPH_TYPE.PRODUCT_DETAIL_REVIEWS_USERNAME}
                mBottom={vs(8)}>
                {name}
              </PStyled.Base>

              <FlexStyled.RowCenter>
                <IconStyled source={Icons.clock} />
                <PStyled.Base
                  type={PARAGRAPH_TYPE.PRODUCT_DETAIL_REVIEWS_DATE_TIME}>
                  {date}
                </PStyled.Base>
              </FlexStyled.RowCenter>
            </FlexStyled.Default>
          </FlexStyled.RowCenterHorizontal>
          {/* End of review Info */}

          <FlexStyled.Default>
            <FlexStyled.RowCenterHorizontal>
              {!!rating && (
                <PStyled.Base
                  type={PARAGRAPH_TYPE.PRODUCT_DETAIL_REVIEWS_USERNAME}
                  mRight={s(Metrics.margin.tiny)}>
                  {rating}
                </PStyled.Base>
              )}
              <PStyled.Base
                type={PARAGRAPH_TYPE.PRODUCT_DETAIL_REVIEWS_DATE_TIME}>
                rating
              </PStyled.Base>
            </FlexStyled.RowCenterHorizontal>

            <IconStyled source={Icons.ratingStart} />
          </FlexStyled.Default>
          {/* End of review Rating */}
        </FlexStyled.FlexSpaceBetweenCenter>

        <ViewStyled.Custom mTop={vs(10)}>
          {Boolean(comment) && (
            <MoreLessText numberOfLines={2}>{comment}</MoreLessText>
          )}
        </ViewStyled.Custom>
        {/* End of review Content */}
      </ViewStyled.Custom>
    </ViewStyled.Custom>
  )
}

export default memo(Reviews, isEqual)
