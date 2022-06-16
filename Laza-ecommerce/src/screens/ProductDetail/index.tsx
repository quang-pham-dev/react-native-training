import React, { useCallback, useContext, useEffect } from 'react';
import { Alert, ScrollView, View } from 'react-native';

// Components
import Button from 'components/Button';
import LoadingIndicator from 'components/LoadingIndicator';

// API
import { productsService } from 'api/products';

// Context
import { ProductsContext } from 'contexts/ProductsContext';
import { GET_PRODUCT, GET_PRODUCT_FAILED, GET_PRODUCT_SUCCESS } from 'contexts/actions/products';

// Types
import { IProductDetailProps } from 'types/screens/ProductDetail';

// Style
import styles from './styles';

// Splitting lazy load component
const HeaderLazy = React.lazy(() => import('./components/Header'));
const InformationLazy = React.lazy(() => import('./components/Information'));
const ImagesPreviewLazy = React.lazy(() => import('./components/ImagesPreview'));
const ProductSizeLazy = React.lazy(() => import('./components/ProductSize'));
const ReviewsLazy = React.lazy(() => import('./components/Reviews'));
const DescriptionLazy = React.lazy(() => import('./components/Description'));

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
    rating
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
                product: response?.data
              }
            }
          });
        }
      } catch (error) {
        if (!isCancelled) {
          productDispatch({
            type: GET_PRODUCT_FAILED,
            payload: error
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
            <React.Suspense fallback={<LoadingIndicator />}>
              <HeaderLazy source={source} navigation={navigation} />
            </React.Suspense>
          </View>
          {/* End Header block */}

          <View style={styles.mainContainer}>
            {/* product detail information */}
            <React.Suspense fallback={<LoadingIndicator />}>
              <InformationLazy title={title} type={type} price={price} />
            </React.Suspense>
            {/* end product detail information */}

            {/* product detail images reviews */}
            <React.Suspense fallback={<LoadingIndicator />}>
              <ImagesPreviewLazy imagesPreview={imagesPreview} />
            </React.Suspense>
            {/* end product detail images reviews */}

            {/* product detail size */}
            <React.Suspense fallback={<LoadingIndicator />}>
              <ProductSizeLazy sizes={sizes} />
            </React.Suspense>
            {/* end product detail size */}

            {/* product detail description */}
            <React.Suspense fallback={<LoadingIndicator />}>
              <DescriptionLazy description={description} />
            </React.Suspense>
            {/* end product detail description */}

            {/* product detail Review */}
            <React.Suspense fallback={<LoadingIndicator />}>
              <ReviewsLazy reviewers={reviewers} comment={comment} rating={rating} />
            </React.Suspense>
            {/* end product Review  */}
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
          {/* end footer block */}
        </>
      )}
    </ScrollView>
  );
};

export default ProductDetailScreen;
