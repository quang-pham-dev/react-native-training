/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useLayoutEffect, useRef} from 'react'

// Styles
import LayoutStyled from '@components/Layout/Layout.styles'
import PStyled from '@components/Paragraph/P.styles'

// Constants
import {
  brands,
  HEADING_TYPE,
  PARAGRAPH_TYPE,
  products,
  SCREEN_NAMES,
} from '@constants'

// Types
import {NavigationPropsType} from '@navigators/app-navigator'
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  TouchableOpacity,
} from 'react-native'

import {useAuthContext} from '@contexts/auth/AuthContext'
import ViewStyled from '@components/View/View.styles'
import {vs} from 'react-native-size-matters'
import HeadingStyled from '@components/Heading/Heading.styles'
import {Icons, Metrics} from '@themes'
import SearchBar from '@components/SearchBar'
import FlexStyled from '@components/Flex/Flex.styles'
import BrandList from '@components/BrandList'
import ProductList from '@components/ProductList'
import IconStyled from '@components/Icon/Icon.styles'
import {DrawerActions} from '@react-navigation/native'
import {s} from 'react-native-size-matters/extend'

type HomeScreenProps = {
  navigation: NavigationPropsType
}

const Home = ({navigation}: HomeScreenProps) => {
  const {state: authState} = useAuthContext()

  const {currentUser} = authState || {}

  // animation values
  const animatedValue = useRef(new Animated.Value(0)).current

  // Animation for the search bar
  const SearchBarAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [0, -145],
          extrapolate: 'clamp',
        }),
      },
      {
        scaleX: animatedValue.interpolate({
          inputRange: [1, 50],
          outputRange: [1, 0.72],
          extrapolate: 'clamp',
        }),
      },
      {
        scaleY: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0.7],
          extrapolate: 'clamp',
        }),
      },
    ],
  }

  // Animation for the header title
  const headerTitleAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [0, -100],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [0, -100],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  }

  // Animation for the brands card list
  const brandsAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [0, 200],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 30],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  }

  // Animation for the products list
  const productListAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [0, -270],
          extrapolate: 'clamp',
        }),
      },
    ],
  }

  const handleBackArrow = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  const handlePressCart = useCallback(() => {}, [])

  const handleOpenMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer())
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
      headerLeft: () => (
        <TouchableOpacity onPress={handleOpenMenu}>
          <IconStyled width={s(45)} height={s(45)} source={Icons.menu} />
        </TouchableOpacity>
      ),

      headerRight: () => (
        <TouchableOpacity onPress={handlePressCart}>
          <IconStyled width={s(45)} height={s(45)} source={Icons.cart} />
        </TouchableOpacity>
      ),
    })
  }, [handleBackArrow, handlePressCart, navigation])

  // Handle Animation on scroll Product list then sticky header
  const handleScrollProductsList = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const {contentOffset} = event.nativeEvent
      const {y} = contentOffset
      if (y >= 0) {
        Animated.timing(animatedValue, {
          toValue: y,
          duration: 800,
          useNativeDriver: true,
        }).start()
      }
    },
    [animatedValue],
  )

  const handleLoadMoreBrand = () => {}
  const handlePressBrandCard = useCallback(
    (id: string) => {
      navigation.navigate(SCREEN_NAMES.BRAND_DETAIL, '1'), console.log(id)
    },

    [],
  )
  const handlePressProductCard = () => {
    console.log('handlePressProductCard')
  }
  const handleLoadMoreProduct = () => {}
  const handlePressLikeProduct = () => {}

  return (
    <LayoutStyled.Main pTop={vs(90)}>
      {/* <Animated.View style={headerIconAnimation}>
        <ViewStyled.Custom bgColor="red">
          <FlexStyled.FlexSpaceBetween>
            <TouchableOpacity onPress={handleOpenMenu}>
              <IconStyled source={Icons.menu} />
            </TouchableOpacity>

            <IconStyled source={Icons.cart} />
          </FlexStyled.FlexSpaceBetween>
        </ViewStyled.Custom>
      </Animated.View> */}

      <Animated.View style={headerTitleAnimation}>
        <ViewStyled.Custom>
          <FlexStyled.RowCenterHorizontal>
            <HeadingStyled
              mBottom={vs(Metrics.margin.tiny)}
              textAlign="left"
              type={HEADING_TYPE.H1}>
              {'Hello '}
            </HeadingStyled>
            <PStyled.Base type={PARAGRAPH_TYPE.PROFILE_USERNAME}>
              {currentUser?.username}
            </PStyled.Base>
          </FlexStyled.RowCenterHorizontal>
          <HeadingStyled textAlign="left" type={HEADING_TYPE.H4}>
            Welcome to Laza.
          </HeadingStyled>
        </ViewStyled.Custom>
      </Animated.View>

      <Animated.View style={SearchBarAnimation}>
        <ViewStyled.Custom pTop={vs(Metrics.padding.mediumPlus)}>
          <SearchBar onSubmitEditing={() => {}} />
        </ViewStyled.Custom>
      </Animated.View>

      <Animated.View style={brandsAnimation}>
        <ViewStyled.Custom pTop={vs(Metrics.padding.mediumPlus)}>
          <FlexStyled.FlexSpaceBetween pBottom={vs(Metrics.padding.medium)}>
            <PStyled.Base>Choose Brand</PStyled.Base>
            <PStyled.Base>View All</PStyled.Base>
          </FlexStyled.FlexSpaceBetween>

          <ViewStyled.Custom w={Metrics.screenWidth}>
            <BrandList
              brands={brands}
              onPressBrandCard={handlePressBrandCard}
              onLoadMoreBrand={handleLoadMoreBrand}
            />
          </ViewStyled.Custom>
        </ViewStyled.Custom>
      </Animated.View>

      <ViewStyled.Custom flex={1}>
        <Animated.View style={productListAnimation}>
          <FlexStyled.FlexSpaceBetween pVertical={vs(Metrics.padding.medium)}>
            <PStyled.Base>New Arrival</PStyled.Base>
            <PStyled.Base>View All</PStyled.Base>
          </FlexStyled.FlexSpaceBetween>
          <ProductList
            products={products}
            onPressProductCard={handlePressProductCard}
            onLoadMoreProduct={handleLoadMoreProduct}
            onPressLikeProduct={handlePressLikeProduct}
            onScroll={handleScrollProductsList}
          />
        </Animated.View>
      </ViewStyled.Custom>
    </LayoutStyled.Main>
  )
}

export default Home
