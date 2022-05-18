/* eslint-disable indent */
import React, { memo, useContext, useEffect, useState } from 'react';
import { Alert, KeyboardAvoidingView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// Components
import BrandsCardList from 'components/BrandList';
import Header from 'components/Layout/Header';
import SearchBar from 'components/SearchBar';
import ProductsList from 'components/ProductsList';
import Title from 'components/Title';
// Styles
import styles from './styles';
// Types
import { HomeScreenProps } from 'types/Screens';
import { ProductProps } from 'types/Products';
import { FETCH_BRANDS, FETCH_PRODUCTS } from 'types/Actions';
// Constants
import Screens from 'constants/Screens';
import { AppContext } from 'context/AppContext';
// Api
import { productsService } from 'api/products.api';
import { brandsService } from 'api/brands.api';
import Label from 'components/Label';
import { Colors, Fonts } from 'styles/themes';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  // Get Current User
  const { authState, productState, brandState, productDispatch, brandDispatch } =
    useContext(AppContext);
  const { currentUser } = authState;
  const { brands: brandsData } = brandState;
  const { products } = productState;

  // State for search bar
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchBrands();
    fetchProducts();
  }, [productDispatch, brandDispatch]);

  // Fetch Products from API
  const fetchProducts = async () => {
    try {
      const { data } = await productsService.fetchProducts();
      productDispatch({
        type: FETCH_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  // Fetch Brands from API
  const fetchBrands = async () => {
    try {
      const { data } = await brandsService.fetchBrands();
      brandDispatch({
        type: FETCH_BRANDS,
        payload: data,
      });
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  // master Data
  const masterData = searchValue
    ? products.filter((product: ProductProps) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase()),
      )
    : products;

  // handle action navigate to Brand Detail Screen
  const handleNavigationBrandDetailScreen = (id: string) => {
    navigation.navigate(Screens.BrandDetail.name, id);
  };

  // handle action navigate to Product Detail Screen
  const handleNavigationProductDetailScreen = (id: string) => {
    navigation.navigate(Screens.ProductDetail.name, id);
  };

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
            <Title titleName='Hello' titleStyles={styles.headerTitle}></Title>
            {currentUser?.username ? (
              <Title titleName={currentUser?.username} titleStyles={styles.userNameTitle}></Title>
            ) : null}
          </View>
          <Title titleName='Welcome to Laza.' titleStyles={styles.subTitle}></Title>
          <SearchBar
            onChangeText={text => setSearchValue(text)}
            onSubmitEditing={onSubmitEditing}
            value={searchValue}
          />
        </View>
        <View style={styles.body}>
          <BrandsCardList
            brandsData={brandsData}
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

export default memo(HomeScreen);
