import React, { useCallback, useContext, useEffect } from 'react';
import { Alert, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Components
import Button from 'components/Button';
import LoadingIndicator from 'components/LoadingIndicator';
import ProductSize from './components/ProductSize/ProductSize';
import ProductDetailHeader from './components/ProductDetailHeader';
import ProductDetailInformation from './components/ProductInformation';
import ProductImagesReview from './components/ProductDetailImagesReview';
import ProductDetailDescription from './components/ProductDetailDescription';
import ProductDetailReviews from './components/ProductDetailReviews';

// API
import { productsService } from 'api/products.api';

// Context
import { AppContext } from 'context/AppContext';
import { GET_PRODUCT, GET_PRODUCT_FAILED, GET_PRODUCT_SUCCESS } from 'context/actions/products';

// Types
import { IProductDetailProps } from 'types/screens/ProductDetail';

// Style
import styles from './styles';

const ProductDetailScreen = ({ navigation, route }: IProductDetailProps) => {
  const id = route.params;

  const { productState, productDispatch } = useContext(AppContext);

  const { product, isProcessing } = productState || {};

  const data = Boolean(product) && product[0];

  useEffect(() => {
    getProductById();
  }, [id, productDispatch]);

  const getProductById = async () => {
    productDispatch({ type: GET_PRODUCT });
    try {
      const { data } = await productsService.getProductById(id);
      productDispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: { product: data },
      });
    } catch (error) {
      productDispatch({
        type: GET_PRODUCT_FAILED,
        payload: error,
      });

      Alert.alert('Error', error.message);
    }
  };

  // handle back button
  const onPressBackHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  // handle action press button cart
  const onPressCartHandler = useCallback(() => {}, []);

  // handle action press button add to cart
  const onAddToCartHandler = useCallback(() => {}, []);

  //   return null

  return (
    <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
      {/* product detail header */}
      <View style={styles.headerContainer}>
        {isProcessing ? (
          <LoadingIndicator />
        ) : (
          <ProductDetailHeader
            product={data}
            navigation={navigation}
            onPressBack={onPressBackHandler}
            onPressCart={onPressCartHandler}
          />
        )}
      </View>
      {/* End Header block */}

      <View style={styles.mainContainer}>
        {/* product detail information */}
        <ProductDetailInformation product={data} />
        {/* end product detail information */}

        {/* product detail images reviews */}
        <ProductImagesReview product={data} />
        {/* product detail images reviews */}

        {/* product detail size */}
        <ProductSize product={data} />
        {/* end product detail size */}

        {/* product detail description */}
        <ProductDetailDescription product={data} />
        {/* End product detail description */}

        {/* product detail Review */}
        <ProductDetailReviews product={data} />
        {/* End product Review  */}
      </View>
      <View style={styles.footerContainer}>
        <Button
          testID='AddtoCartButton'
          text='Add to Cart'
          buttonStyles={[styles.bottomButton, styles.loginButton]}
          textStyles={[styles.textBottomButton]}
          onPress={onAddToCartHandler}
        />
      </View>
      {/* End footer block */}
    </ScrollView>
  );
};

export default ProductDetailScreen;
