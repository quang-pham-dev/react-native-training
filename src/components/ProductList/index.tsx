import React, {memo, useCallback, useRef} from 'react'
import {FlatList} from 'react-native'

// LIBS
import isEqual from 'react-fast-compare'
// import {FlashList} from '@shopify/flash-list'

// Components
import ProductCard from '@components/ProductCard'
import LoadingIndicator from '@components/LoadingIndicator'

// Constants
import {PRODUCTS_EMPTY_RESULT} from '@constants'

// Types
import {IProduct, ProductListProps} from '@model-types'

// Styles
import PStyled from '@components/Paragraph/P.styles'

const ProductsList = ({
  onPressProductCard,
  products,
  onPressLikeProduct,
  onScroll,
}: ProductListProps) => {
  const listRef = useRef<FlatList<IProduct> | null>(null)
  // handle action load more products
  const handleLoadMoreProducts = () => {}

  // handle action when press product card with id
  const handlePressProductCard = useCallback(
    (id: string) => {
      onPressProductCard(id)
    },
    [onPressProductCard],
  )

  // handle action when press like product card
  const handlePressLikeProduct = useCallback(() => {
    onPressLikeProduct(products)
  }, [products, onPressLikeProduct])

  // handle render when empty list
  const renderEmptyList = () => (
    <PStyled.Base>{PRODUCTS_EMPTY_RESULT}</PStyled.Base>
  )

  // handle render Card component
  const renderProductCard = useCallback(
    ({item}: {item: IProduct}) => (
      <ProductCard
        product={item}
        onPressProductCard={handlePressProductCard}
        onPressLikeProduct={handlePressLikeProduct}
      />
    ),
    [handlePressLikeProduct, handlePressProductCard],
  )

  // handle render Footer component
  const renderFooterComponent = () => <LoadingIndicator />

  return (
    <FlatList
      ref={listRef}
      numColumns={2}
      data={products}
      // eslint-disable-next-line react-native/no-inline-styles
      columnWrapperStyle={{justifyContent: 'space-between'}}
      contentInsetAdjustmentBehavior="always"
      initialNumToRender={6}
      renderItem={renderProductCard}
      keyExtractor={product => product.id}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={renderEmptyList}
      ListFooterComponent={renderFooterComponent}
      onEndReached={handleLoadMoreProducts}
      onEndReachedThreshold={0.5}
      onScroll={onScroll}
      scrollEventThrottle={16}
    />
  )
}
export default memo(ProductsList, isEqual)
