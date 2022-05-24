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
import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_SUCCESS,
} from 'context/actions/products.actions';
import { GET_BRANDS_FAILED, GET_BRANDS_SUCCESS } from 'context/actions/brands.actions';

// API
import { productsService } from 'api/products.api';
import { brandsService } from 'api/brands.api';

// Types
import { IHomeScreenProps } from 'types/screens/Home';
import { IProduct } from 'types/models/Products';
import { LOADING_SIZE } from 'types/common/Enums';

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
    productDispatch({ type: GET_PRODUCTS });
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
        ? productState?.products.filter((product: IProduct) =>
            product.name.toLowerCase().includes(searchValue.toLowerCase()),
          )
        : productState?.products,
    [searchValue, productState?.products],
  );

  // handle action navigate to Brand Detail Screen
  const handleNavigationBrandDetailScreen = useCallback(
    (id: string) => {
      navigation.navigate(SCREENS_ROUTES.HOME_STACK.BRAND_DETAIL_SCREEN.name, id);
    },
    [navigation],
  );

  // handle action navigate to Product Detail Screen
  const handleNavigationProductDetailScreen = useCallback(
    (id: string) => {
      navigation.navigate(SCREENS_ROUTES.HOME_STACK.PRODUCT_DETAIL_SCREEN.name, id);
    },
    [navigation],
  );

  // handle action Like Product
  const handleLikeProduct = useCallback(() => {}, []);

  // handle action search
  const onSubmitEditing = useCallback(() => {}, []);

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
          <>
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
            {brandState?.isProcessing && <LoadingIndicator size={LOADING_SIZE.SMALL} />}
            <BrandsCardList
              brandsData={brandState?.brands}
              handleNavigationBrandDetailScreen={handleNavigationBrandDetailScreen}
            />
          </>
          <View>
            <>
              <View style={[styles.productTitle, styles.titleRow]}>
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
              {productState?.isProcessing && <LoadingIndicator size={LOADING_SIZE.SMALL} />}
              <ProductsList
                products={masterData}
                handleLikeProduct={handleLikeProduct}
                handleNavigationProductDetailScreen={handleNavigationProductDetailScreen}
              />
            </>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
