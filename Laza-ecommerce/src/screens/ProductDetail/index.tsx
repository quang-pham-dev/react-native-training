import React, { useCallback, useContext, useEffect } from 'react';
import { Alert, ScrollView, View } from 'react-native';

// Components
import Button from 'components/Button';
import LoadingIndicator from 'components/LoadingIndicator';
import ProductSize from './components/ProductSize';
import Header from './components/Header';
import Information from './components/Information';
import ImagesPreview from './components/ImagesPreview';
import Description from './components/Description';
import Reviews from './components/Reviews';

// API
import { productsService } from 'api/products';

// Context
import { ProductsContext } from 'contexts/ProductsContext';
import { GET_PRODUCT, GET_PRODUCT_FAILED, GET_PRODUCT_SUCCESS } from 'contexts/actions/products';

// Types
import { IProductDetailProps } from 'types/screens/ProductDetail';

// Style
import styles from './styles';

const ProductDetailScreen = ({ navigation, route }: IProductDetailProps) => {
  const id = route.params;

  const { productState, productDispatch } = useContext(ProductsContext);

  const { product, isProcessing } = productState || {};

  const data = product ? product[0] : {};

  const {
    source,
    title,
    price,
    type,
    description,
    imagesPreview,
    sizes,
    reviewers,
    comment,
    rating,
  } = data;

  useEffect(() => {
    // Get product by id
    let isCancelled = false;
    (async function getProductById(): Promise<void> {
      productDispatch({ type: GET_PRODUCT });
      try {
        const response = await productsService.getProductById(id);
        if (!isCancelled) {
          productDispatch({
            type: GET_PRODUCT_SUCCESS,
            payload: {
              data: {
                product: response?.data,
              },
            },
          });
        }
      } catch (error) {
        if (!isCancelled) {
          productDispatch({
            type: GET_PRODUCT_FAILED,
            payload: error,
          });
        }
        Alert.alert('Error', error.message);
      }
    })();

    // clean up
    return () => {
      isCancelled = true;
    };
  }, []);

  // handle action press button add to cart
  const handlePressAddToCartIcon = useCallback(() => {}, []);

  return (
    <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
      {isProcessing ? (
        <LoadingIndicator />
      ) : (
        <>
          {/* product detail header */}
          <View style={styles.headerContainer}>
            <Header source={source} navigation={navigation} />
          </View>
          {/* End Header block */}

          <View style={styles.mainContainer}>
            {/* product detail information */}
            <Information title={title} type={type} price={price} />
            {/* end product detail information */}

            {/* product detail images reviews */}
            <ImagesPreview imagesPreview={imagesPreview} />
            {/* product detail images reviews */}

            {/* product detail size */}
            <ProductSize sizes={sizes} />
            {/* end product detail size */}

            {/* product detail description */}
            <Description description={description} />
            {/* End product detail description */}

            {/* product detail Review */}
            <Reviews reviewers={reviewers} comment={comment} rating={rating} />
            {/* End product Review  */}
          </View>
          <View style={styles.footerContainer}>
            <Button
              testID='AddToCartButton'
              text='Add to Cart'
              buttonStyles={[styles.bottomButton, styles.loginButton]}
              textStyles={[styles.textBottomButton]}
              onPress={handlePressAddToCartIcon}
            />
          </View>
          {/* End footer block */}
        </>
      )}
    </ScrollView>
  );
};

export default ProductDetailScreen;
