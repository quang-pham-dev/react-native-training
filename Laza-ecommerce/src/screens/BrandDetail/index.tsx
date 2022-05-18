import React, { memo, useContext, useEffect } from 'react';
import { Alert, Image, Pressable, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
// Components
import ProductsList from 'components/ProductsList';
import Title from 'components/Title';
// Context
import { AppContext } from 'context/AppContext';
// API
import { productsService } from 'api/products.api';
import Screens from 'constants/Screens';
// Types
import { FETCH_PRODUCTS_BY_BRAND_ID } from 'types/Actions';
import { BrandProps } from 'types/Brands';
import { BrandDetailProps } from 'types/Screens';
// Theme
import { IMAGES } from 'styles/themes';
// Styles
import styles from './styles';

const BrandDetailScreen = ({ navigation, route }: BrandDetailProps) => {
  const id = route.params;
  const { productState, productDispatch, brandState } = useContext(AppContext);
  const { productsByBrandId } = productState;

  // handle back button
  const handlePressBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const fetchProductsByBrandId = async () => {
      try {
        const { data } = await productsService.fetchProductByBrandId(id);
        productDispatch({
          type: FETCH_PRODUCTS_BY_BRAND_ID,
          payload: data,
        });
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    };
    fetchProductsByBrandId();
  }, [id, productDispatch]);

  // get current brand
  const currentBrand = brandState.brands.filter((brand: BrandProps) => brand.id === id);

  // handle like product
  const handleLikeProduct = () => {};

  // handle action navigate to Product Detail Screen
  const handleNavigationProductDetailScreen = (id: string) => {
    navigation.navigate(Screens.ProductDetail.name, id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.actionsWrapper}>
          <Pressable onPress={handlePressBack}>
            <Image style={styles.backIcon} source={IMAGES.iconBack} />
          </Pressable>
          <Pressable>
            <View style={styles.brandLogoWrapper}>
              {currentBrand && (
                <Image style={styles.brandLogo} source={{ uri: currentBrand[0].logoUrl }} />
              )}
            </View>
          </Pressable>
          <Pressable onPress={() => {}}>
            <Image style={styles.cartIcon} source={IMAGES.iconCart} />
          </Pressable>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.contentHeader}>
          <View>
            {productsByBrandId && (
              <Title
                titleName={`${productsByBrandId.length | 0} Items`}
                titleStyles={styles.totalCount}
              />
            )}
            <Title titleName='Available in stock' titleStyles={styles.titleContent} />
          </View>
          <View style={styles.sortWrapper}>
            <TouchableOpacity onPress={() => {}}>
              <MaterialIcons name='sort' size={24} color='black' />
            </TouchableOpacity>
            <Title titleName='Sort' titleStyles={styles.sortText} />
          </View>
        </View>

        {/* List Product */}
        <ProductsList
          productsData={productsByBrandId}
          handleLikeProduct={handleLikeProduct}
          handleNavigationProductDetailScreen={handleNavigationProductDetailScreen}
        />
      </View>
    </View>
  );
};

export default memo(BrandDetailScreen);
