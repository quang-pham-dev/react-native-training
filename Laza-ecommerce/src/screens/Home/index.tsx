/* eslint-disable indent */
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Alert, KeyboardAvoidingView, View } from 'react-native';
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
import { GET_PRODUCTS_FAILED, GET_PRODUCTS_SUCCESS } from 'context/actions/products.actions';
import { GET_BRANDS_FAILED, GET_BRANDS_SUCCESS } from 'context/actions/brands.action';

// API
import { productsService } from 'api/products.api';
import { brandsService } from 'api/brands.api';

// Types
import { IHomeScreenProps } from 'types/screens/Home';
import { Product } from 'types/models/Products';

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

  // State for search bar
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    getProducts();
    getBrands();
  }, [productDispatch, brandDispatch]);

  // GET PRODUCTS
  const getProducts = async () => {
    try {
      const { data } = await productsService.getProducts();
      productDispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: data,
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
        payload: data,
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
        ? productState?.products.filter((product: Product) =>
            product.name.toLowerCase().includes(searchValue.toLowerCase()),
          )
        : productState?.products,
    [searchValue, productState?.products],
  );

  // handle action navigate to Brand Detail Screen
  const handleNavigationBrandDetailScreen = useCallback(
    (id: string) => {
      navigation.navigate(SCREENS_ROUTES.APP.BRAND_DETAIL.name, id);
    },
    [navigation],
  );

  // handle action navigate to Product Detail Screen
  const handleNavigationProductDetailScreen = useCallback(
    (id: string) => {
      navigation.navigate(SCREENS_ROUTES.APP.PRODUCT_DETAIL.name, id);
    },
    [navigation],
  );

  // handle action Like Product
  const handleLikeProduct = () => {};

  // handle action search
  const onSubmitEditing = () => {};

  return (
    <SafeAreaView style={styles.Container}>
      <KeyboardAvoidingView style={styles.homeMain}>
        <View style={styles.header}>
          <Header navigation={navigation} />
          {/* end header layout */}
          <View style={styles.headerTitleWrapper}>
            <Title titleName='Hello' titleStyles={styles.headerTitle} />
            {authState?.currentUser?.username ? (
              <Title
                titleName={authState?.currentUser?.username}
                titleStyles={styles.userNameTitle}
              />
            ) : null}
          </View>
          <Title titleName='Welcome to Laza.' titleStyles={styles.subTitle}></Title>
          <SearchBar
            onChangeText={(text: string) => setSearchValue(text)}
            onSubmitEditing={onSubmitEditing}
            value={searchValue}
          />
        </View>
        <View style={styles.body}>
          {brandState?.isProcessing && <LoadingIndicator />}
          <BrandsCardList
            brandsData={brandState?.brands}
            handleNavigationBrandDetailScreen={handleNavigationBrandDetailScreen}
          />
          <View>
            <View style={styles.productTitle}>
              <Label
                labelName='New Arraival'
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
            {productState?.isProcessing && <LoadingIndicator />}
            <ProductsList
              productsData={masterData}
              handleLikeProduct={handleLikeProduct}
              handleNavigationProductDetailScreen={handleNavigationProductDetailScreen}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
