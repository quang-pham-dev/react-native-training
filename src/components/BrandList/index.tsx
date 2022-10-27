import React, {memo, useCallback} from 'react'
import {FlatList} from 'react-native'

// LIBS
import isEqual from 'react-fast-compare'

// Components
import BrandCard from '@components/BrandCard'
import LoadingIndicator from '@components/LoadingIndicator'

// Constants
import {BRANDS_EMPTY_RESULT} from '@constants'

// Types
import {BrandCardListProps, BrandsListProps} from '@model-types'

// Styles
import PStyled from '@components/Paragraph/P.styles'
import ViewStyled from '@components/View/View.styles'

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
    <ViewStyled.Default>
      <FlatList
        horizontal
        data={brands}
        renderItem={renderBrandCard}
        keyExtractor={brand => brand.id}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={renderEmptyList}
        ListFooterComponent={renderFooterComponent}
        onEndReached={handleLoadMoreBrands}
        onEndReachedThreshold={0.5}
      />
    </ViewStyled.Default>
  )
}

export default memo(BrandList, isEqual)
