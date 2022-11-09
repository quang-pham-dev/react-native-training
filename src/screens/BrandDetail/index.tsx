import React, {useCallback, useEffect, useLayoutEffect, useMemo} from 'react'
import {Alert, TouchableOpacity} from 'react-native'

// LIBS
import {vs, s} from 'react-native-size-matters/extend'

// Navigator
import {NavigationPropsType} from '@navigators/app-navigator'

// Components
import ProductList from '@components/ProductList'

// Constants
import {PARAGRAPH_TYPE, PRODUCT_PAGINATION, SCREEN_NAMES} from '@constants'

// Styles
import FlexStyled from '@components/Flex/Flex.styles'
import ViewStyled from '@components/View/View.styles'
import IconStyled from '@components/Icon/Icon.styles'
import {Image} from '@components/Image/Image.styles'
import PStyled from '@components/Paragraph/P.styles'
import LayoutStyled from '@components/Layout/Layout.styles'

// Types
import {IBrand} from '@model-types'

// Themes
import {Colors, Icons, Metrics} from '@themes'
import {useBrandContext} from '@contexts/brand/BrandContext'
import {useProductContext} from '@contexts/product/ProductContext'
import {
  GET_PRODUCTS_BY_BRAND_ID,
  GET_PRODUCTS_BY_BRAND_ID_FAILED,
  GET_PRODUCTS_BY_BRAND_ID_SUCCESS,
  LOAD_MORE_PRODUCTS_BY_BRAND_ID,
  LOAD_MORE_PRODUCTS_BY_BRAND_ID_FAILED,
  LOAD_MORE_PRODUCTS_BY_BRAND_ID_SUCCESS,
} from '@contexts/product/action/product'
import {productsService} from '@apis'

type BrandDetailProps = {
  navigation: NavigationPropsType
  route?: {
    params?: {
      id?: string
    }
  }
}

const BrandDetail = ({navigation, route}: BrandDetailProps) => {
  const {id} = route?.params || {}

  const {state: brandState} = useBrandContext()

  const {state: productState, dispatch: productDispatch} = useProductContext()

  const {brands} = brandState || {}

  const {productsByBrandId, isProcessing, limit, totalRowsByBrandId} =
    productState || {}

  // Get current brand
  const currentBrand = useMemo(
    () => brands.filter((brand: IBrand) => brand.id === id),
    [brands, id],
  )

  // Handle like product
  const handlePressLikeProduct = useCallback(() => {}, [])

  // Handle action navigate to Product Detail Screen
  const handlePressProductCard = useCallback(
    (productId: string) =>
      navigation.navigate(SCREEN_NAMES.PRODUCT_DETAIL, {id: productId}),
    [navigation],
  )
  // Handle load more products
  const handleLoadMoreProducts = useCallback(async () => {
    productDispatch({type: LOAD_MORE_PRODUCTS_BY_BRAND_ID})

    try {
      const response = await productsService.getProductsByBrandId(
        id,
        limit + PRODUCT_PAGINATION.PRODUCT_LIMIT,
      )
      const {data, pagination} = response.data || {}
      const {_limit} = pagination || {}
      productDispatch({
        type: LOAD_MORE_PRODUCTS_BY_BRAND_ID_SUCCESS,
        payload: {
          data: {
            productsByBrandId: data,
          },
          limit: _limit,
        },
      })
    } catch (error: any) {
      productDispatch({
        type: LOAD_MORE_PRODUCTS_BY_BRAND_ID_FAILED,
        payload: error,
      })

      Alert.alert('Error', error.message)
    }
  }, [id, limit, productDispatch])

  const handleBackArrow = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  const handlePressCart = useCallback(() => {}, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
      headerLeft: () => (
        <TouchableOpacity onPress={handleBackArrow}>
          <IconStyled width={s(45)} height={s(45)} source={Icons.back} />
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <ViewStyled.Custom
          w={s(70)}
          h={s(45)}
          bgColor={Colors.palette.lightGray}
          bRadius={s(Metrics.borderRadius.base)}
          pHorizontal={vs(Metrics.padding.custom)}
          pVertical={vs(Metrics.padding.custom)}>
          <Image.Normal
            alignSelf="center"
            height={s(25)}
            width={s(50)}
            source={{
              uri: currentBrand[0]?.url,
            }}
            resizeMode="contain"
          />
        </ViewStyled.Custom>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={handlePressCart}>
          <IconStyled width={s(45)} height={s(45)} source={Icons.cart} />
        </TouchableOpacity>
      ),
    })
  }, [currentBrand, handleBackArrow, handlePressCart, navigation])

  useEffect(() => {
    // Get products by brand id
    let isCancelled = false
    ;(async function getProductsByBrandId(): Promise<void> {
      productDispatch({type: GET_PRODUCTS_BY_BRAND_ID})

      try {
        const response = await productsService.getProductsByBrandId(
          id,
          PRODUCT_PAGINATION.PRODUCT_LIMIT,
        )

        if (!isCancelled) {
          const {data, pagination} = response?.data || {}
          const {_limit, _totalRows} = pagination || {}
          productDispatch({
            type: GET_PRODUCTS_BY_BRAND_ID_SUCCESS,
            payload: {
              data: {
                productsByBrandId: data,
              },
              limit: _limit,
              totalRowsByBrandId: _totalRows,
            },
          })
        }
      } catch (error: any) {
        if (!isCancelled) {
          productDispatch({
            type: GET_PRODUCTS_BY_BRAND_ID_FAILED,
            payload: error,
          })
        }
        Alert.alert('Error', error.message)
      }
    })()

    return () => {
      isCancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LayoutStyled.Main pTop={vs(115)} pBottom={vs(Metrics.padding.extraLarger)}>
      <>
        <FlexStyled.FlexSpaceBetweenCenter
          pBottom={vs(Metrics.padding.mediumPlus)}>
          <FlexStyled.Default>
            <PStyled.Base type={PARAGRAPH_TYPE.BRAND_DETAIL_ITEM_COUNT}>{`${
              isProcessing ? 0 : totalRowsByBrandId
            } Items`}</PStyled.Base>

            <PStyled.Base
              type={PARAGRAPH_TYPE.BRAND_DETAIL_TITLE}
              mTop={vs(Metrics.margin.tiny)}>
              Available in stock
            </PStyled.Base>
          </FlexStyled.Default>

          <ViewStyled.Custom
            w={s(71)}
            h={s(37)}
            bgColor={Colors.palette.lightGray}
            bRadius={s(Metrics.borderRadius.base)}
            pHorizontal={vs(Metrics.padding.custom)}
            pVertical={vs(Metrics.padding.custom)}>
            <FlexStyled.RowCenter>
              <TouchableOpacity>
                <IconStyled w={s(24)} h={s(24)} source={Icons.heart} />
              </TouchableOpacity>
              <PStyled.Base mLeft={s(Metrics.margin.tiny)}>Sort</PStyled.Base>
            </FlexStyled.RowCenter>
          </ViewStyled.Custom>
        </FlexStyled.FlexSpaceBetweenCenter>
        {/* end content header */}

        <ProductList
          products={productsByBrandId}
          onPressLikeProduct={handlePressLikeProduct}
          onPressProductCard={handlePressProductCard}
          onLoadMoreProducts={handleLoadMoreProducts}
        />
        {/* end Product List */}
      </>
    </LayoutStyled.Main>
  )
}

export default BrandDetail
