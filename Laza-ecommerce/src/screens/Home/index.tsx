import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Alert, KeyboardAvoidingView, View, Text } from 'react-native';

// LIBS
import { SafeAreaView } from 'react-native-safe-area-context';

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
  SEARCH_PRODUCTS,
  SEARCH_PRODUCTS_FAILED,
  SEARCH_PRODUCTS_SUCCESS,
} from 'context/actions/products';
import { GET_BRANDS, GET_BRANDS_FAILED, GET_BRANDS_SUCCESS } from 'context/actions/brands';

// API
import { productsService } from 'api/products.api';
import { brandsService } from 'api/brands.api';

// Types
import { IHomeScreenProps } from 'types/screens/Home';
import { LOADING_SIZE } from 'types/components/LoadingIndicator';
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
  // State for search bar
  const [searchText, setSearchText] = useState<string>('');

  const { authState, productState, brandState, productDispatch, brandDispatch } =
    useContext(AppContext);

  const { currentUser } = authState || {};

  const { username } = currentUser || {};

  const { products, limit, searchValue, productsSearch } = productState || {};

  const { brands } = brandState || {};

  useEffect(() => {
    getProducts();
    getBrands();
  }, [productDispatch, brandDispatch]);

  // GET PRODUCTS
  const getProducts = async () => {
    productDispatch({ type: GET_PRODUCTS });
    try {
      const response = await productsService.getProducts(PAGINATION.LIMIT);
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

  const handleLoadMoreProducts = useCallback(async () => {
    productDispatch({
      type: LOAD_MORE_PRODUCTS,
    });

    try {
      const res = await productsService.getProducts(limit + PAGINATION.LIMIT);
      const { data, pagination } = res.data || {};
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
  const handleSubmitEditing = useCallback(() => {
    handleSearchProducts();
    // }
  }, []);

  const handleSearchProducts = useCallback(async () => {
    productDispatch({
      type: SEARCH_PRODUCTS,
    });

    try {
      const response = await productsService.searchProductsByName(limit, searchValue);
      if (response.data) {
        const { data, pagination } = response.data || {};
        const { _limit } = pagination || {};
        productDispatch({
          type: SEARCH_PRODUCTS_SUCCESS,
          payload: {
            data: {
              productsSearch: data,
            },
          },
        });
      }
    } catch (error) {
      productDispatch({
        type: SEARCH_PRODUCTS_FAILED,
        payload: error,
      });

      Alert.alert('Error', error.message);
    }
  }, [limit, products]);

  const productsData = useMemo(
    () => (productsSearch ? productsSearch : products),
    [productsSearch, products],
  );

  return (
    <SafeAreaView style={styles.Container}>
      <KeyboardAvoidingView style={styles.homeMain}>
        <View style={styles.header}>
          <Header navigation={navigation} />
          {/* end header layout */}
          <View style={styles.headerTitleWrapper}>
            <Text style={styles.headerTitle}>Hello</Text>
            {Boolean(username) && <Text style={styles.userNameTitle}>{username}</Text>}
          </View>
          <Title titleName='Welcome to Laza.' titleStyles={styles.subTitle}></Title>
          <SearchBar onSubmitEditing={handleSubmitEditing} />
        </View>
        {/* end header */}

        <View style={styles.body}>
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

          {Boolean(brandState?.isProcessing) && <LoadingIndicator size={LOADING_SIZE.SMALL} />}
          <BrandsCardList brands={brands} onPressBrandCard={handlePressBrandCard} />
          {/* end brand list */}

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

          {Boolean(productState?.isProcessing) && <LoadingIndicator size={LOADING_SIZE.SMALL} />}
          <ProductsList
            products={products}
            onPressLikeProduct={handlePressLikeProduct}
            onPressProductCard={handlePressProductCard}
            onLoadMoreProducts={handleLoadMoreProducts}
          />
          {/* end product list */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
