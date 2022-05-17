import React, { memo, useContext, useState } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// Components
import BrandsCardList from 'components/BrandList';
import Header from 'components/Layout/Header';
import SearchBar from 'components/SearchBar';
import ProductsList from 'components/ProductsList';
import Title from 'components/Title';
import LoadingIndicator from 'components/Indicator';
// Hooks
import useAxios from 'hooks/useAxios';
// Styles
import styles from './styles';
// Types
import { HomeScreenProps } from 'types/Screens';
import { ProductProps } from 'types/Products';
// Constants
import { APP_BASE_URL } from 'constants/Common';
import Screens from 'constants/Screens';
import { AppContext } from 'context/AppContext';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  // Get Current User
  const { authState } = useContext(AppContext);
  const { currentUser } = authState;
  // State for search bar
  const [searchValue, setSearchValue] = useState('');

  // fetchBrands()
  const { data: brandsData, loading: fetchingBrand } = useAxios({
    method: 'GET',
    url: `${APP_BASE_URL}/brands`,
  });

  // fetchProducts();
  const { data: productsData, loading: fetchingProduct } = useAxios({
    method: 'GET',
    url: `${APP_BASE_URL}/newArraivalProducts`,
  });

  const masterData = searchValue
    ? productsData.filter((product: ProductProps) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase()),
    )
    : productsData;

  // handle action navigate to Brand Detail Screen
  const handleNavigationBrandDetailScreen = (id: string) => {
    navigation.navigate(Screens.BrandDetail.name, id);
  };

  // handle action navigate to Product Detail Screen
  const handleNavigationProductDetailScreen = (id: string) => {
    navigation.navigate(Screens.ProductDetail.name, id);
  };

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
          {fetchingBrand && brandsData ? (
            <LoadingIndicator />
          ) : (
            <BrandsCardList
              brandsData={brandsData}
              handleNavigationBrandDetailScreen={handleNavigationBrandDetailScreen}
            />
          )}

          {fetchingProduct && masterData ? (
            <LoadingIndicator />
          ) : (
            <ProductsList
              productsData={masterData}
              handleLikeProduct={handleLikeProduct}
              handleNavigationProductDetailScreen={handleNavigationProductDetailScreen}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default memo(HomeScreen);
