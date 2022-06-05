import React, { memo, useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  View,
  Text,
  Animated,
  StatusBar,
  StyleSheet,
  Platform,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

// LIBS
import { SafeAreaView } from 'react-native-safe-area-context';
import isEqual from 'react-fast-compare';

// Components
import BrandsCardList from 'components/BrandList';
import Header from 'components/Layout/Header';
import SearchBar from 'components/SearchBar';
import ProductsList from 'components/ProductsList';
import Title from 'components/Title';
import Label from 'components/Label';
import LoadingIndicator from 'components/LoadingIndicator';

// Context
import { AppContext } from 'context/AppContext';
import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_SUCCESS,
  LOAD_MORE_PRODUCTS,
  LOAD_MORE_PRODUCTS_FAILED,
  LOAD_MORE_PRODUCTS_SUCCESS,
} from 'context/actions/products';
import { GET_BRANDS, GET_BRANDS_FAILED, GET_BRANDS_SUCCESS } from 'context/actions/brands';

// API
import { productsService } from 'api/products.api';
import { brandsService } from 'api/brands.api';

// Types
import { IHomeScreenProps } from 'types/screens/Home';
import { IProduct } from 'types/models/Products';

// Constants
import { SCREENS_ROUTES } from 'constants/Screens';
import { PAGINATION } from 'constants/Products';

// Themes
import Fonts from 'themes/Fonts';
import Colors from 'themes/Colors';

// Styles
import styles from './styles';

const HomeScreen = ({ navigation }: IHomeScreenProps) => {
  const { authState, productState, brandState, productDispatch, brandDispatch } =
    useContext(AppContext);

  const { currentUser } = authState || {};

  const { username } = currentUser || {};

  const { products, limit, searchValue } = productState || {};

  const { brands } = brandState || {};

  // animation values
  const animatedValue = useRef(new Animated.Value(0)).current;

  const SearchBarAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [0, -140],
          extrapolate: 'clamp',
        }),
      },
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0.7],
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
  };

  const headerIconAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [0, -3],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

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
  };

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
  };

  const productListAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 40],
          outputRange: [0, -230],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  useEffect(() => {
    getBrands();
    getProducts();
  }, [productDispatch, brandDispatch]);

  // GET PRODUCTS
  const getProducts = async () => {
    productDispatch({ type: GET_PRODUCTS });
    try {
      const response = await productsService.getProducts(limit);
      if (response.data) {
        const { data, pagination } = response.data || {};
        const { _limit, _totalRows } = pagination || {};
        productDispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: {
            data: {
              products: data,
            },
            totalRows: _totalRows,
            limit: _limit,
          },
        });
      }
    } catch (error) {
      productDispatch({
        type: GET_PRODUCTS_FAILED,
        payload: error,
      });

      Alert.alert('Error', error.message);
    }
  };

  // GET BRANDS
  const getBrands = async () => {
    brandDispatch({ type: GET_BRANDS });
    try {
      const { data } = await brandsService.getBrands();
      brandDispatch({
        type: GET_BRANDS_SUCCESS,
        payload: { brands: data },
      });
    } catch (error) {
      brandDispatch({
        type: GET_BRANDS_FAILED,
        payload: error,
      });

      Alert.alert('Error', error.message);
    }
  };

  // handle action navigate to Brand Detail Screen when press card brand
  const handlePressBrandCard = useCallback(
    (id: string) => {
      navigation.navigate(SCREENS_ROUTES.HOME_STACK.BRAND_DETAIL_SCREEN.name, id);
    },
    [navigation],
  );

  // handle action navigate to Product Detail Screen when press product item
  const handlePressProductCard = useCallback(
    (id: string) => {
      navigation.navigate(SCREENS_ROUTES.HOME_STACK.PRODUCT_DETAIL_SCREEN.name, id);
    },
    [navigation],
  );

  // handle Load More Products
  const handleLoadMoreProducts = useCallback(async () => {
    productDispatch({ type: LOAD_MORE_PRODUCTS });

    try {
      const response = await productsService.getProducts(limit + PAGINATION.LIMIT);
      const { data, pagination } = response.data || {};
      const { _limit } = pagination || {};
      productDispatch({
        type: LOAD_MORE_PRODUCTS_SUCCESS,
        payload: {
          data: {
            products: data,
          },
          limit: _limit,
        },
      });
    } catch (error) {
      productDispatch({
        type: LOAD_MORE_PRODUCTS_FAILED,
        payload: error,
      });

      Alert.alert('Error', error.message);
    }
  }, [limit, products]);

  // handle action Like Product
  const handlePressLikeProduct = useCallback(() => {}, []);

  // handle action search
  const handleSubmitEditing = useCallback(() => {}, []);

  // master data render products list
  const masterData = useMemo(
    () =>
      searchValue
        ? products.filter((product: IProduct) =>
            product.name.toLowerCase().includes(searchValue.toLowerCase()),
          )
        : products,
    [searchValue, products],
  );

  // handle scroll Product list then sticky header
  const handleScrollProductsList = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { contentOffset } = event.nativeEvent;
      const { y } = contentOffset;
      if (y >= 0) {
        Animated.timing(animatedValue, {
          toValue: y,
          duration: 800,
          useNativeDriver: true,
        }).start();
      }
    },
    [animatedValue],
  );

  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar barStyle='light-content' />
      <View style={styles.header}>
        <Animated.View style={headerIconAnimation}>
          <Header navigation={navigation} />
        </Animated.View>
        {/* end header layout */}

        <Animated.View style={[styles.headerTitleWrapper, headerTitleAnimation]}>
          <Text style={styles.headerTitle}>Hello</Text>
          {Boolean(username) && <Text style={styles.userNameTitle}>{username}</Text>}
        </Animated.View>
        <Animated.View style={headerTitleAnimation}>
          <Title titleName='Welcome to Laza.' titleStyles={styles.subTitle}></Title>
        </Animated.View>
        <Animated.View style={SearchBarAnimation}>
          <SearchBar onSubmitEditing={handleSubmitEditing} />
        </Animated.View>
      </View>
      {/* end header */}

      <View style={styles.body}>
        <Animated.View style={brandsAnimation}>
          <View style={[styles.brandTitle, styles.titleRow]}>
            <Label
              labelName='Choose Brand'
              fontSize={Fonts.size.default}
              lineHeight={Fonts.lineHeight.sm}
              fontFamily={Fonts.fontFamily.Inter_500Medium}
              color={Colors.textBlack}
            />
            <Label
              labelName='View All'
              fontSize={Fonts.size.small}
              lineHeight={Fonts.lineHeight.xs}
              fontFamily={Fonts.fontFamily.Inter_400Regular}
              color={Colors.textGray}
            />
          </View>
          {/* end brand title */}

          {Boolean(brandState?.isProcessing) && <LoadingIndicator size={'small'} />}
          <BrandsCardList brands={brands} onPressBrandCard={handlePressBrandCard} />
          {/* end brand list */}
        </Animated.View>

        <Animated.View style={productListAnimation}>
          <View style={[styles.productTitle, styles.titleRow]}>
            <Label
              labelName='New Arrival'
              fontSize={Fonts.size.default}
              lineHeight={Fonts.lineHeight.sm}
              fontFamily={Fonts.fontFamily.Inter_500Medium}
              color={Colors.textBlack}
            />
            <Label
              labelName='View All'
              fontSize={Fonts.size.small}
              lineHeight={Fonts.lineHeight.xs}
              fontFamily={Fonts.fontFamily.Inter_400Regular}
              color={Colors.textGray}
            />
          </View>
          {/* end product title */}

          {Boolean(productState?.isProcessing) && <LoadingIndicator size={'small'} />}
          <ProductsList
            products={masterData}
            onPressLikeProduct={handlePressLikeProduct}
            onPressProductCard={handlePressProductCard}
            onLoadMoreProducts={handleLoadMoreProducts}
            onScroll={handleScrollProductsList}
          />
          {/* end product list */}
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default memo(HomeScreen, isEqual);
