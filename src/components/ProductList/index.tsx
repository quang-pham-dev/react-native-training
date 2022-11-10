import React, {memo, useCallback, useRef} from 'react'
import {FlatList} from 'react-native'

// LIBS
import isEqual from 'react-fast-compare'

// Contexts
import {useProductContext} from '@contexts/product/ProductContext'

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
  onLoadMoreProducts,
}: ProductListProps) => {
  const listRef = useRef<FlatList<IProduct> | null>(null)

  const {state: productState} = useProductContext()

  const {
    isLoading,
    totalRows,
    productsByBrandId,
    totalRowsByBrandId,
    products: allProduct,
  } = productState || {}

  // handle action load more products
  const handleLoadMoreProducts = () => {
    let cacheEndReached = null
    let productList = []
    let totalProduct = 0

    if (totalRows > totalRowsByBrandId) {
      productList = allProduct
      totalProduct = totalRows

      productList?.length < totalProduct &&
        (cacheEndReached = onLoadMoreProducts)
    }
    if (totalRowsByBrandId <= totalRows) {
      productList = productsByBrandId
      totalProduct = totalRowsByBrandId

      productList?.length < totalProduct &&
        (cacheEndReached = onLoadMoreProducts)
    }

    return cacheEndReached
  }

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
  const renderFooterComponent = () => (isLoading ? <LoadingIndicator /> : null)

  return (
    <FlatList
      ref={listRef}
      numColumns={2}
      data={products}
      // eslint-disable-next-line react-native/no-inline-styles
      columnWrapperStyle={{justifyContent: 'space-between'}}
      initialNumToRender={6}
      renderItem={renderProductCard}
      keyExtractor={product => product.id}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={renderEmptyList}
      ListFooterComponent={renderFooterComponent}
      onEndReached={handleLoadMoreProducts()}
      onEndReachedThreshold={0.5}
      onScroll={onScroll}
      scrollEventThrottle={16}
    />
  )
}
export default memo(ProductsList, isEqual)
