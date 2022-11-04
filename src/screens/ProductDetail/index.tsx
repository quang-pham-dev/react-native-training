import React, {useCallback, useLayoutEffect} from 'react'
import {ScrollView, TouchableOpacity, View} from 'react-native'

// Libs
import {s} from 'react-native-size-matters/extend'

// Navigator
import {NavigationPropsType} from '@navigators/app-navigator'

// Components
import {Button, BtnType} from '@components/Button'
import Description from './components/Description'
import ImagesPreview from './components/ImagesPreview'
import Information from './components/Information'
import ProductSize from './components/Sizes'
import Reviews from './components/Reviews'
import TotalPrice from './components/TotalPrice'

// Style
import IconStyled from '@components/Icon/Icon.styles'
import {Image} from '@components/Image/Image.styles'
import FlexStyled from '@components/Flex/Flex.styles'
import LayoutStyled from '@components/Layout/Layout.styles'

// Constants
import {products} from '@constants'

// Themes
import {Icons, Metrics} from '@themes'

type ProductDetailProps = {
  navigation: NavigationPropsType
  route?: {
    params?: {
      id?: string
    }
  }
}

const ProductDetail = ({navigation}: ProductDetailProps) => {
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

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <>
        <View>
          <Image.Normal
            height={s(Metrics.screenHeight * 0.5)}
            source={{
              uri: products[0].url,
            }}
          />
        </View>
        <LayoutStyled.Main>
          {/* product detail information */}
          <Information
            name={products[0].name}
            type={products[0].type}
            price={products[0].price}
          />
          {/* end product detail information */}

          {/* product detail images reviews */}
          <ImagesPreview imagesPreview={products[0].imagesPreview} />
          {/* end product detail images reviews */}

          {/* product detail size */}
          <ProductSize sizes={products[0].sizes} />
          {/* end product detail size */}

          {/* product detail description */}
          <Description description={products[0].description} />
          {/* end product detail description */}

          {/* product detail Review */}
          <Reviews
            reviewers={products[0].reviewers}
            comment={products[0].comment}
            rating={products[0].rating}
          />
          {/* end product Review  */}

          <TotalPrice vatPrice={products[0].vatPrice} />
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
    </ScrollView>
  )
}

export default ProductDetail
