import React, {memo, useCallback} from 'react'

// LIBS
import isEqual from 'react-fast-compare'
import {FlashList} from '@shopify/flash-list'

// Components
import BrandCard from '@components/BrandCard'
import LoadingIndicator from '@components/LoadingIndicator'

// Constants
import {BRANDS_EMPTY_RESULT} from '@constants'

// Types
import {BrandCardListProps, BrandsListProps} from '@model-types'

// Styles
import PStyled from '@components/Paragraph/P.styles'

const BrandList = ({onPressBrandCard, brands}: BrandsListProps) => {
  // handle action when press card brand with id
  const handlePressBrandCard = useCallback(
    (id: string) => {
      onPressBrandCard(id)
    },
    [onPressBrandCard],
  )

  // handle action load more brands
  const handleLoadMoreBrands = () => {}

  // handle render Card component
  const renderBrandCard = ({item}: {item: BrandCardListProps}) => (
    <BrandCard brand={item} onPressBrandCard={handlePressBrandCard} />
  )

  // render empty list
  const renderEmptyList = () => (
    <PStyled.Base>{BRANDS_EMPTY_RESULT}</PStyled.Base>
  )

  // handle render Footer component
  const renderFooterComponent = () => <LoadingIndicator />

  return (
    <>
      <FlashList
        horizontal
        data={brands}
        estimatedItemSize={50}
        renderItem={renderBrandCard}
        keyExtractor={brand => brand.id}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={renderEmptyList}
        ListFooterComponent={renderFooterComponent}
        onEndReached={handleLoadMoreBrands}
        onEndReachedThreshold={0.5}
      />
    </>
  )
}

export default memo(BrandList, isEqual)
