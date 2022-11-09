import React, {useCallback, useEffect, useLayoutEffect} from 'react'
import {Alert, TouchableOpacity} from 'react-native'

// Libs
import {s} from 'react-native-size-matters/extend'

// Navigator
import {NavigationPropsType} from '@navigators/app-navigator'

// Components
import {BtnType, Button} from '@components/Button'
import Description from './components/Description'
import ImagesPreview from './components/ImagesPreview'
import Information from './components/Information'
import Reviews from './components/Reviews'
import Sizes from './components/Sizes'
import TotalPrice from './components/TotalPrice'

// Style
import FlexStyled from '@components/Flex/Flex.styles'
import IconStyled from '@components/Icon/Icon.styles'
import {Image} from '@components/Image/Image.styles'
import LayoutStyled from '@components/Layout/Layout.styles'
import ViewStyled from '@components/View/View.styles'

// Themes
import {Icons, Metrics} from '@themes'
import {useProductContext} from '@contexts/product/ProductContext'
import {
  GET_PRODUCT,
  GET_PRODUCT_FAILED,
  GET_PRODUCT_SUCCESS,
} from '@contexts/product/action/product'
import {productsService} from '@apis'
import LoadingIndicator from '@components/LoadingIndicator'

type ProductDetailProps = {
  navigation: NavigationPropsType
  route?: {
    params?: {
      id?: string
    }
  }
}

const ProductDetail = ({navigation, route}: ProductDetailProps) => {
  const {id} = route?.params || {}
  const {state: productState, dispatch: productDispatch} = useProductContext()

  const {product, isProcessing} = productState || {}
  const {
    url,
    name,
    price,
    vatPrice,
    type,
    description,
    imagesPreview,
    sizes,
    reviewers,
    comment,
    rating,
  } = product[0] || product

  // handle action press button add to cart
  const handlePressAddToCartIcon = useCallback(() => {}, [])

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

      headerRight: () => (
        <TouchableOpacity onPress={handlePressCart}>
          <IconStyled width={s(45)} height={s(45)} source={Icons.cart} />
        </TouchableOpacity>
      ),
    })
  }, [handleBackArrow, handlePressCart, navigation])

  useEffect(() => {
    // Get product by id
    let isCancelled = false
    ;(async function getProductById(): Promise<void> {
      productDispatch({type: GET_PRODUCT})
      try {
        const response = await productsService.getProductById(id)
        if (!isCancelled) {
          productDispatch({
            type: GET_PRODUCT_SUCCESS,
            payload: {
              data: {
                product: response?.data,
              },
            },
          })
        }
      } catch (error: any) {
        if (!isCancelled) {
          productDispatch({
            type: GET_PRODUCT_FAILED,
            payload: error,
          })
        }
        Alert.alert('Error', error.message)
      }
    })()

    // clean up
    return () => {
      isCancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ViewStyled.ScrollViewWrapper showsVerticalScrollIndicator={false}>
      {isProcessing ? (
        <LoadingIndicator />
      ) : (
        <>
          <Image.Normal
            height={s(Metrics.screenHeight * 0.5)}
            source={{
              uri: url,
            }}
          />
          <LayoutStyled.Main>
            {/* product detail information */}
            <Information name={name} type={type} price={price} />
            {/* end product detail information */}

            {/* product detail images reviews */}
            <ImagesPreview imagesPreview={imagesPreview} />
            {/* end product detail images reviews */}

            {/* product detail size */}
            <Sizes sizes={sizes} />
            {/* end product detail size */}

            {/* product detail description */}
            <Description description={description} />
            {/* end product detail description */}

            {/* product detail Review */}
            <Reviews reviewers={reviewers} comment={comment} rating={rating} />
            {/* end product Review  */}

            <TotalPrice vatPrice={vatPrice} />
          </LayoutStyled.Main>

          <FlexStyled.FlexEnd>
            <Button
              type={BtnType.BOTTOM}
              onPress={handlePressAddToCartIcon}
              label="Add to Cart"
            />
          </FlexStyled.FlexEnd>
          {/* end footer block */}
        </>
      )}
    </ViewStyled.ScrollViewWrapper>
  )
}

export default ProductDetail
