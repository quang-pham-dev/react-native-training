import React, {useCallback, useLayoutEffect, useMemo} from 'react'
import {TouchableOpacity} from 'react-native'

// LIBS
import {vs, s} from 'react-native-size-matters/extend'

// Navigator
import {NavigationPropsType} from '@navigators/app-navigator'

// Components
import ProductList from '@components/ProductList'

// Constants
import {brands, PARAGRAPH_TYPE, products} from '@constants'

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

type BrandDetailProps = {
  navigation: NavigationPropsType
  route?: {
    params?: {
      id: string
    }
  }
}

const BrandDetail = ({navigation, route}: BrandDetailProps) => {
  const {id} = route?.params || {}

  // Get current brand
  const currentBrand = useMemo(
    () => brands.filter((brand: IBrand) => brand.id === id),
    [id],
  )

  console.log(currentBrand)

  // Handle like product
  const handlePressLikeProduct = useCallback(() => {}, [])

  // Handle action navigate to Product Detail Screen
  const handlePressProductCard = useCallback(() => {}, [])

  const handleLoadMoreProduct = useCallback(() => {}, [])

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
              uri: 'https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png',
            }}
            resizeMode="cover"
          />
        </ViewStyled.Custom>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={handlePressCart}>
          <IconStyled width={s(45)} height={s(45)} source={Icons.cart} />
        </TouchableOpacity>
      ),
    })
  }, [handleBackArrow, handlePressCart, navigation])

  return (
    <LayoutStyled.Main pTop={vs(115)} pBottom={vs(Metrics.padding.extraLarger)}>
      <>
        <FlexStyled.FlexSpaceBetweenCenter
          pBottom={vs(Metrics.padding.mediumPlus)}>
          <FlexStyled.Default>
            <PStyled.Base
              type={
                PARAGRAPH_TYPE.BRAND_DETAIL_ITEM_COUNT
              }>{`${10} Items`}</PStyled.Base>

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
          products={products}
          onPressLikeProduct={handlePressLikeProduct}
          onPressProductCard={handlePressProductCard}
          onLoadMoreProduct={handleLoadMoreProduct}
        />
        {/* end Product List */}
      </>
    </LayoutStyled.Main>
  )
}

export default BrandDetail
