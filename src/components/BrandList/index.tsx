import React, {memo, useCallback} from 'react'
import {FlatList} from 'react-native'

// LIBS
import isEqual from 'react-fast-compare'

// Contexts
import {useBrandContext} from '@contexts/brand/BrandContext'

// Components
import BrandCard from '@components/BrandCard'
import LoadingIndicator from '@components/LoadingIndicator'

// Constants
import {BRANDS_EMPTY_RESULT} from '@constants'

// Types
import {BrandCardListProps, BrandsListProps} from '@model-types'

// Styles
import PStyled from '@components/Paragraph/P.styles'

const BrandList = ({
  onPressBrandCard,
  brands,
  onLoadMoreBrands,
}: BrandsListProps) => {
  const {state: brandState} = useBrandContext()

  const {totalRowsOfBrands, isLoading} = brandState || {}
  // handle action when press card brand with id
  const handlePressBrandCard = useCallback(
    (id: string) => {
      onPressBrandCard(id)
    },
    [onPressBrandCard],
  )

  // handle action load more brands
  const handleLoadMoreBrands = () => {
    let cacheEndReached = null
    brands?.length < totalRowsOfBrands && (cacheEndReached = onLoadMoreBrands)

    return cacheEndReached
  }

  // handle render Card component
  const renderBrandCard = ({item}: {item: BrandCardListProps}) => (
    <BrandCard brand={item} onPressBrandCard={handlePressBrandCard} />
  )

  // render empty list
  const renderEmptyList = () => (
    <PStyled.Base>{BRANDS_EMPTY_RESULT}</PStyled.Base>
  )

  // handle render Footer component
  const renderFooterComponent = () => (isLoading ? <LoadingIndicator /> : null)

  return (
    <FlatList
      horizontal
      data={brands}
      initialNumToRender={6}
      renderItem={renderBrandCard}
      keyExtractor={brand => brand.id}
      showsHorizontalScrollIndicator={false}
      ListEmptyComponent={renderEmptyList}
      ListFooterComponent={renderFooterComponent}
      // eslint-disable-next-line react-native/no-inline-styles
      ListFooterComponentStyle={{alignSelf: 'center'}}
      onEndReached={handleLoadMoreBrands}
      onEndReachedThreshold={0.5}
    />
  )
}

export default memo(BrandList, isEqual)
