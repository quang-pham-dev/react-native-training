import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import { Alert, View, TouchableOpacity } from 'react-native';

// LIBS
import { MaterialIcons } from '@expo/vector-icons';

// Components
import ProductsList from 'components/ProductsList';
import Title from 'components/Title';
import LoadingIndicator from 'components/LoadingIndicator';
import Header from './components/Header';

// Context
import { BrandsContext } from 'contexts/BrandsContext';
import { useProductContext } from 'contexts/ProductsContext';
import {
  GET_PRODUCTS_BY_BRAND_ID,
  GET_PRODUCTS_BY_BRAND_ID_FAILED,
  GET_PRODUCTS_BY_BRAND_ID_SUCCESS,
  LOAD_MORE_PRODUCTS_BY_BRAND_ID,
  LOAD_MORE_PRODUCTS_BY_BRAND_ID_FAILED,
  LOAD_MORE_PRODUCTS_BY_BRAND_ID_SUCCESS
} from 'contexts/actions/products';

// API
import { productsService } from 'api/products';

// Constants
import { SCREENS_ROUTES } from 'constants/Screens';
import { PRODUCT_PAGINATION } from 'constants/Products';

// Types
import { IBrand } from 'types/models/Brands';
import { IBrandDetailProps } from 'types/screens/BrandDetail';

// Styles
import styles from './styles';

const BrandDetailScreen = ({ navigation, route }: IBrandDetailProps) => {
  const id = route.params;

  const { brandState } = useContext(BrandsContext);

  const { productState, productDispatch } = useProductContext();

  const { brands } = brandState || {};

  const { productsByBrandId, isProcessing, limit, totalRowsByBrandId } = productState || {};

  useEffect(() => {
    // Get products by brand id
    let isCancelled = false;
    (async function getProductsByBrandId(): Promise<void> {
      productDispatch({ type: GET_PRODUCTS_BY_BRAND_ID });

      try {
        const response = await productsService.getProductsByBrandId(
          id,
          PRODUCT_PAGINATION.PRODUCT_LIMIT
        );

        if (!isCancelled) {
          const { data, pagination } = response?.data || {};
          const { _limit, _totalRows } = pagination || {};
          productDispatch({
            type: GET_PRODUCTS_BY_BRAND_ID_SUCCESS,
            payload: {
              data: {
                productsByBrandId: data
              },
              limit: _limit,
              totalRowsByBrandId: _totalRows
            }
          });
        }
      } catch (error) {
        if (!isCancelled) {
          productDispatch({
            type: GET_PRODUCTS_BY_BRAND_ID_FAILED,
            payload: error
          });
        }
        Alert.alert('Error', error.message);
      }
    })();

    return () => {
      isCancelled = true;
    };
  }, []);

  // Get current brand
  const currentBrand = useMemo(
    () => brands?.filter((brand: IBrand) => brand.id === id),
    [brands, id]
  );

  // Handle like product
  const handlePressLikeProduct = useCallback(() => {}, []);

  // Handle action navigate to Product Detail Screen
  const handlePressProductCard = useCallback((id: string) => {
    navigation.navigate(SCREENS_ROUTES.HOME_STACK.PRODUCT_DETAIL_SCREEN.name, id);
  }, []);

  // Handle load more products
  const handleLoadMoreProducts = useCallback(async () => {
    productDispatch({ type: LOAD_MORE_PRODUCTS_BY_BRAND_ID });

    try {
      const response = await productsService.getProductsByBrandId(
        id,
        limit + PRODUCT_PAGINATION.PRODUCT_LIMIT
      );
      const { data, pagination } = response.data || {};
      const { _limit } = pagination || {};
      productDispatch({
        type: LOAD_MORE_PRODUCTS_BY_BRAND_ID_SUCCESS,
        payload: {
          data: {
            productsByBrandId: data
          },
          limit: _limit
        }
      });
    } catch (error) {
      productDispatch({
        type: LOAD_MORE_PRODUCTS_BY_BRAND_ID_FAILED,
        payload: error
      });

      Alert.alert('Error', error.message);
    }
  }, [limit]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* product detail header */}
        <Header logoUrl={currentBrand[0]?.logoUrl} navigation={navigation} />
        {/* End Header block */}
      </View>
      {/* end header */}

      <View style={styles.contentContainer}>
        <View style={styles.contentHeader}>
          <View>
            <Title titleName={`${isProcessing ? 0 : totalRowsByBrandId} Items`} />
            <Title.subHeadingPage titleName='Available in stock' style={styles.titleContent} />
          </View>
          <View style={styles.sortWrapper}>
            <TouchableOpacity>
              <MaterialIcons name='sort' size={24} color='black' />
            </TouchableOpacity>
            <Title titleName='Sort' style={styles.sortText} />
          </View>
        </View>
        {/* end content header */}

        {isProcessing ? (
          <LoadingIndicator size={'large'} />
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
