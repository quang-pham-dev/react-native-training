import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import { Alert, Text, Image, Pressable, View, TouchableOpacity } from 'react-native';

// LIBS
import { MaterialIcons } from '@expo/vector-icons';

// Components
import ProductsList from 'components/ProductsList';
import Title from 'components/Title';
import LoadingIndicator from 'components/LoadingIndicator';

// Context
import { AppContext } from 'context/AppContext';
import {
  GET_PRODUCTS_BY_BRAND_ID,
  GET_PRODUCTS_BY_BRAND_ID_FAILED,
  GET_PRODUCTS_BY_BRAND_ID_SUCCESS,
  LOAD_MORE_PRODUCTS_BY_BRAND_ID,
  LOAD_MORE_PRODUCTS_BY_BRAND_ID_FAILED,
  LOAD_MORE_PRODUCTS_BY_BRAND_ID_SUCCESS,
} from 'context/actions/products';

// API
import { productsService } from 'api/products.api';

// Constants
import { SCREENS_ROUTES } from 'constants/Screens';
import { PAGINATION } from 'constants/Products';

// Types
import { IBrand } from 'types/models/Brands';
import { LOADING_SIZE } from 'types/components/LoadingIndicator';
import { IBrandDetailProps } from 'types/screens/BrandDetail';

// Theme
import IMAGES from 'themes/Images';

// Styles
import styles from './styles';

const BrandDetailScreen = ({ navigation, route }: IBrandDetailProps) => {
  const id = route.params;

  const { productState, productDispatch, brandState, brandDispatch } = useContext(AppContext);

  const { brands } = brandState || {};

  const { productsByBrandId, isProcessing, limit, totalRowsByBrandId } = productState || {};

  useEffect(() => {
    fetchProductsByBrandId();
  }, [productDispatch]);

  const fetchProductsByBrandId = async () => {
    productDispatch({ type: GET_PRODUCTS_BY_BRAND_ID });
    try {
      const response = await productsService.getProductsByBrandId(id, PAGINATION.LIMIT);
      if (response.data) {
        const { data, pagination } = response.data || {};
        const { _limit, _totalRows } = pagination || {};
        productDispatch({
          type: GET_PRODUCTS_BY_BRAND_ID_SUCCESS,
          payload: {
            data: {
              productsByBrandId: data,
            },
            limit: _limit,
            totalRowsByBrandId: _totalRows,
          },
        });
      }
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
    () => brands?.filter((brand: IBrand) => brand.id === id),
    [brands, id],
  );

  // handle back button
  const handlePressBackIcon = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  // handle like product
  const handlePressLikeProduct = useCallback(() => {}, []);

  // handle action navigate to Product Detail Screen
  const handlePressProductCard = useCallback(
    (id: string) => {
      navigation.navigate(SCREENS_ROUTES.HOME_STACK.PRODUCT_DETAIL_SCREEN.name, id);
    },
    [navigation, id],
  );

  // handle load more products
  const handleLoadMoreProducts = useCallback(async () => {
    productDispatch({
      type: LOAD_MORE_PRODUCTS_BY_BRAND_ID,
    });

    try {
      const res = await productsService.getProductsByBrandId(id, limit + PAGINATION.LIMIT);
      const { data, pagination } = res.data || {};
      const { _limit } = pagination || {};
      productDispatch({
        type: LOAD_MORE_PRODUCTS_BY_BRAND_ID_SUCCESS,
        payload: {
          data: {
            productsByBrandId: data,
          },
          limit: _limit,
        },
      });
    } catch (error) {
      productDispatch({
        type: LOAD_MORE_PRODUCTS_BY_BRAND_ID_FAILED,
        payload: error,
      });

      Alert.alert('Error', error.message);
    }
  }, [limit, productsByBrandId]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.actionsWrapper}>
          <Pressable onPress={handlePressBackIcon}>
            <Image style={styles.backIcon} source={IMAGES.iconBack} />
          </Pressable>
          <Pressable>
            <View style={styles.brandLogoWrapper}>
              {Boolean(currentBrand) && (
                <Image style={styles.brandLogo} source={{ uri: currentBrand[0].logoUrl }} />
              )}
            </View>
          </Pressable>
          <Pressable onPress={() => {}}>
            <Image style={styles.cartIcon} source={IMAGES.iconCart} />
          </Pressable>
        </View>
      </View>
      {/* end header */}

      <View style={styles.contentContainer}>
        <View style={styles.contentHeader}>
          <View>
            <Text style={styles.totalCount}>{isProcessing ? 0 : totalRowsByBrandId | 0} Items</Text>
            <Text style={styles.titleContent}>Available in stock</Text>
          </View>
          <View style={styles.sortWrapper}>
            <TouchableOpacity onPress={() => {}}>
              <MaterialIcons name='sort' size={24} color='black' />
            </TouchableOpacity>
            <Title titleName='Sort' titleStyles={styles.sortText} />
          </View>
        </View>
        {/* end content header */}

        {isProcessing ? (
          <LoadingIndicator size={LOADING_SIZE.LARGE} />
        ) : (
          <ProductsList
            products={productsByBrandId}
            onPressLikeProduct={handlePressLikeProduct}
            onPressProductCard={handlePressProductCard}
            onLoadMoreProducts={handleLoadMoreProducts}
          />
        )}
        {/* end Product List */}
      </View>
    </View>
  );
};

export default BrandDetailScreen;
