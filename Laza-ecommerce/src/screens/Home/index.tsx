import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Alert, KeyboardAvoidingView, View, Text } from 'react-native';
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
import { GET_PRODUCTS, GET_PRODUCTS_FAILED, GET_PRODUCTS_SUCCESS } from 'context/actions/products';
import { GET_BRANDS_FAILED, GET_BRANDS_SUCCESS } from 'context/actions/brands';

// API
import { productsService } from 'api/products.api';
import { brandsService } from 'api/brands.api';

// Types
import { IHomeScreenProps } from 'types/screens/Home';
import { IProduct } from 'types/models/Products';
import { LOADING_SIZE } from 'types/components/LoadingIndicator';

// Constants
import { SCREENS_ROUTES } from 'constants/Screens';

// Theme
import Fonts from 'themes/Fonts';
import Colors from 'themes/Colors';

// Styles
import styles from './styles';

const HomeScreen = ({ navigation }: IHomeScreenProps) => {
  const { authState, productState, brandState, productDispatch, brandDispatch } =
    useContext(AppContext);

  const { currentUser } = authState || {};

  const { username } = currentUser || {};

  const { products } = productState || {};

  const { brands } = brandState || {};

  // State for search bar
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    getProducts();
    getBrands();
  }, [productDispatch, brandDispatch]);

  // GET PRODUCTS
  const getProducts = async () => {
    productDispatch({ type: GET_PRODUCTS });
    try {
      const { data } = await productsService.getProducts();
      productDispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: { products: data },
      });
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
    try {
      const { data } = await brandsService.fetchBrands();
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

  // master Data  render Product List
  const masterData = useMemo(
    () =>
      searchValue
        ? products.filter((product: IProduct) =>
            product.name.toLowerCase().includes(searchValue.toLowerCase()),
          )
        : products,
    [searchValue, products],
  );

  // handle action navigate to Brand Detail Screen
  const onNavigateBrandDetailScreenHandler = useCallback(
    (id: string) => {
      navigation.navigate(SCREENS_ROUTES.HOME_STACK.BRAND_DETAIL_SCREEN.name, id);
    },
    [navigation],
  );

  // handle action navigate to Product Detail Screen
  const onNavigateProductDetailScreenHandler = useCallback(
    (id: string) => {
      navigation.navigate(SCREENS_ROUTES.HOME_STACK.PRODUCT_DETAIL_SCREEN.name, id);
    },
    [navigation],
  );

  // handle action Like Product
  const onPressLikeProductHandler = useCallback(() => {}, []);

  // handle action search
  const onSubmitEditing = useCallback(() => {}, []);

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
          <SearchBar
            onChangeText={(text: string) => setSearchValue(text)}
            onSubmitEditing={onSubmitEditing}
            value={searchValue}
          />
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
          <BrandsCardList
            brands={brands}
            onNavigateBrandDetailScreen={onNavigateBrandDetailScreenHandler}
          />
          {/* end brand list */}
          <View>
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
              products={masterData}
              onPressLikeProduct={onPressLikeProductHandler}
              onNavigateProductDetailScreen={onNavigateProductDetailScreenHandler}
            />
            {/* end product list */}
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
