/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react'
import {
  Alert,
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  TouchableOpacity,
} from 'react-native'

// Libs
import {s, vs} from 'react-native-size-matters/extend'
import {DrawerActions} from '@react-navigation/native'

// Navigation
import {NavigationPropsType} from '@navigators/app-navigator'

// Store
import {
  GET_BRANDS,
  GET_BRANDS_FAILED,
  GET_BRANDS_SUCCESS,
  LOAD_MORE_BRANDS,
  LOAD_MORE_BRANDS_FAILED,
  LOAD_MORE_BRANDS_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_SUCCESS,
  LOAD_MORE_PRODUCTS,
  LOAD_MORE_PRODUCTS_FAILED,
  LOAD_MORE_PRODUCTS_SUCCESS,
} from '@store'

// Contexts
import {useAuthContext, useBrandContext, useProductContext} from '@contexts'

// Apis
import {brandService, productsService} from '@apis'

// Styles
import LayoutStyled from '@components/Layout/Layout.styles'
import PStyled from '@components/Paragraph/P.styles'
import SearchBar from '@components/SearchBar'
import FlexStyled from '@components/Flex/Flex.styles'
import BrandList from '@components/BrandList'
import ProductList from '@components/ProductList'
import IconStyled from '@components/Icon/Icon.styles'
import HeadingStyled from '@components/Heading/Heading.styles'
import ViewStyled from '@components/View/View.styles'

// Constants
import {
  BRAND_PAGINATION,
  HEADING_TYPE,
  isIOS,
  PARAGRAPH_TYPE,
  PRODUCT_PAGINATION,
  SCREEN_NAMES,
} from '@constants'

// Types
import {IProduct} from '@model-types'
import {IDataError} from '@state-types/error'

// Themes
import {Icons, Metrics} from '@themes'

type HomeScreenProps = {
  navigation: NavigationPropsType
}

const Home = ({navigation}: HomeScreenProps) => {
  const {state: authState} = useAuthContext()
  const {state: brandState, dispatch: brandDispatch} = useBrandContext()
  const {state: productState, dispatch: productDispatch} = useProductContext()

  const {currentUser} = authState || {}
  const {brands, limit: brandsLimit} = brandState || {}
  const {products, limit: productLimit, searchValue} = productState || {}

  // master data render products list
  const productsMasterData = useMemo(
    () =>
      searchValue
        ? products.filter((product: IProduct) =>
            product.name.toLowerCase().includes(searchValue.toLowerCase()),
          )
        : products,
    [searchValue, products],
  )
  // animation values
  const animatedValue = useRef(new Animated.Value(0)).current

  //  Animation for the search bar
  const SearchBarAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [0, isIOS() ? vs(-135) : vs(-175)],
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

  //  Animation for the header title
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

  //  Animation for the brands card list
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

  //  Animation for the products list
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

  //  Handle Animation on scroll Product list then sticky header
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

  // handle Load More Brands
  const handleLoadMoreBrands = useCallback(async () => {
    brandDispatch({type: LOAD_MORE_BRANDS})

    try {
      const response = await brandService.getBrands(
        brandsLimit + BRAND_PAGINATION.BRAND_LIMIT,
      )
      const {data, pagination} = response.data || {}
      const {_limit} = pagination || {}
      brandDispatch({
        type: LOAD_MORE_BRANDS_SUCCESS,
        payload: {
          brands: data,
          limit: _limit,
        },
      })
    } catch (error: any) {
      brandDispatch({
        type: LOAD_MORE_BRANDS_FAILED,

        payload: error,
      })

      Alert.alert('Error', error.message)
    }
  }, [brandsLimit])

  // handle Load More Products
  const handleLoadMoreProducts = useCallback(async () => {
    productDispatch({type: LOAD_MORE_PRODUCTS})

    try {
      const response = await productsService.getProducts(
        productLimit + PRODUCT_PAGINATION.PRODUCT_LIMIT,
      )
      const {data, pagination} = response.data || {}
      const {_limit} = pagination || {}
      productDispatch({
        type: LOAD_MORE_PRODUCTS_SUCCESS,
        payload: {
          products: data,
          limit: _limit,
        },
      })
    } catch (error: any) {
      productDispatch({
        type: LOAD_MORE_PRODUCTS_FAILED,
        payload: error,
      })

      Alert.alert('Error', error.message)
    }
  }, [productLimit])

  const handlePressLikeProduct = () => {}

  const handlePressBrandCard = useCallback(
    (id: string) => navigation.navigate(SCREEN_NAMES.BRAND_DETAIL, {id}),
    [],
  )
  //  handle action navigate to Product Detail Screen when press card product
  const handlePressProductCard = useCallback(
    (id: string) => navigation.navigate(SCREEN_NAMES.PRODUCT_DETAIL, {id}),
    [],
  )

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

  useEffect(() => {
    //    GET BRANDS
    let isCancelled = false
    ;(async function getBrands(): Promise<void> {
      brandDispatch({type: GET_BRANDS})
      try {
        const response = await brandService.getBrands(brandsLimit)
        if (!isCancelled) {
          const {data, pagination} = response.data || {}
          const {_limit, _totalRows} = pagination || {}

          brandDispatch({
            type: GET_BRANDS_SUCCESS,
            payload: {
              brands: data,
              totalRowsOfBrands: _totalRows,
              limit: _limit,
            },
          })
        }
      } catch (error) {
        if (!isCancelled) {
          brandDispatch({
            type: GET_BRANDS_FAILED,
            payload: error as IDataError,
          })
        }
        Alert.alert('Error', (error as IDataError).error)
      }
    })()

    // GET_PRODUCTS
    ;(async function getProducts(): Promise<void> {
      productDispatch({type: GET_PRODUCTS})

      try {
        const response = await productsService.getProducts(productLimit)
        if (!isCancelled) {
          const {data, pagination} = response.data || {}
          const {_limit, _totalRows} = pagination || {}

          productDispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: {
              products: data,
              totalRows: _totalRows,
              limit: _limit,
            },
          })
        }
      } catch (error) {
        if (!isCancelled) {
          productDispatch({
            type: GET_PRODUCTS_FAILED,
            payload: error as IDataError,
          })
        }
        Alert.alert('Error', (error as IDataError).error)
      }
    })()

    // cleanup
    return () => {
      isCancelled = true
    }
  }, [])

  return (
    <LayoutStyled.Main pTop={vs(110)}>
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

      <ViewStyled.Custom pBottom={vs(Metrics.screenHeight * 0.35)}>
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
                onLoadMoreBrands={handleLoadMoreBrands}
              />
            </ViewStyled.Custom>
          </ViewStyled.Custom>
        </Animated.View>

        <Animated.View style={productListAnimation}>
          <FlexStyled.FlexSpaceBetween pVertical={vs(Metrics.padding.medium)}>
            <PStyled.Base>New Arrival</PStyled.Base>
            <PStyled.Base>View All</PStyled.Base>
          </FlexStyled.FlexSpaceBetween>
          <ProductList
            products={productsMasterData}
            onPressProductCard={handlePressProductCard}
            onLoadMoreProducts={handleLoadMoreProducts}
            onPressLikeProduct={handlePressLikeProduct}
            onScroll={handleScrollProductsList}
          />
        </Animated.View>
      </ViewStyled.Custom>
    </LayoutStyled.Main>
  )
}

export default Home
