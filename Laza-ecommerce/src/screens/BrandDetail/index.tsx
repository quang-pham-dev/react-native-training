import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import { Alert, Image, Pressable, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Components
import ProductsList from 'components/ProductsList';
import Title from 'components/Title';
import LoadingIndicator from 'components/LoadingIndicator';

// Context
import { AppContext } from 'context/AppContext';
import {
  GET_PRODUCTS_BY_BRAND_ID_FAILED,
  GET_PRODUCTS_BY_BRAND_ID_SUCCESS,
} from 'context/actions/products.actions';

// API
import { productsService } from 'api/products.api';

// Constants
import { SCREENS_ROUTES } from 'constants/Screens';

// Types
import { Brand } from 'types/models/Brands';
import { IBrandDetailProps } from 'types/screens/BrandDetail';

// Theme
import IMAGES from 'themes/Images';

// Styles
import styles from './styles';

const BrandDetailScreen = ({ navigation, route }: IBrandDetailProps) => {
  const id = route.params;
  const { productState, productDispatch, brandState } = useContext(AppContext);

  // handle back button
  const handlePressBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    fetchProductsByBrandId();
  }, [id, productDispatch]);

  const fetchProductsByBrandId = async () => {
    try {
      const { data } = await productsService.getProductByBrandId(id);
      productDispatch({
        type: GET_PRODUCTS_BY_BRAND_ID_SUCCESS,
        payload: data,
      });
    } catch (error) {
      productDispatch({
        type: GET_PRODUCTS_BY_BRAND_ID_FAILED,
        payload: error,
      });

      Alert.alert('Error', error.message);
    }
  };

  // get current brand
  const currentBrand = useMemo(
    () => brandState?.brands?.filter((brand: Brand) => brand.id === id),
    [brandState, id],
  );

  // handle like product
  const handleLikeProduct = () => {};

  // handle action navigate to Product Detail Screen
  const handleNavigationProductDetailScreen = useCallback(
    (id: string) => {
      navigation.navigate(SCREENS_ROUTES.HOME_STACK.PRODUCT_DETAIL_SCREEN.name, id);
    },
    [navigation, id],
  );

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
            {productState?.productsByBrandId && (
              <Title
                titleName={`${productState?.productsByBrandId.length | 0} Items`}
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
        {productState?.isProcessing && <LoadingIndicator />}
        <ProductsList
          productsData={productState?.productsByBrandId}
          handleLikeProduct={handleLikeProduct}
          handleNavigationProductDetailScreen={handleNavigationProductDetailScreen}
        />
      </View>
    </View>
  );
};

export default BrandDetailScreen;
