import React, { useCallback, useContext, useEffect } from 'react';
import { Alert, Image, ImageBackground, Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import Button from 'components/Button';
import MoreLessText from 'components/LessMoreText';
import ProductSize from 'components/ProductSize/ProductSize';
import Title from 'components/Title';
import LoadingIndicator from 'components/LoadingIndicator';

// API
import { productsService } from 'api/products.api';

// Context
import { AppContext } from 'context/AppContext';
import {
  GET_PRODUCT,
  GET_PRODUCT_FAILED,
  GET_PRODUCT_SUCCESS,
} from 'context/actions/products';

// Types
import { IProductDetailProps } from 'types/screens/ProductDetail';
import { LOADING_SIZE } from 'types/common/Enums';

// Theme
import IMAGES from 'themes/Images';

// Style
import styles from './styles';

const ProductDetail = ({ navigation, route }: IProductDetailProps) => {
  const id = route.params;
  const { productState, productDispatch } = useContext(AppContext);
  const { productById, isProcessing } = productState || {};

  useEffect(() => {
    getProductById();
  }, [id, productDispatch]);

  const getProductById = async () => {
    productDispatch({ type: GET_PRODUCT });
    try {
      const { data } = await productsService.getProductById(id);
      productDispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: data,
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
  const handlePressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  // handle action press button cart
  const handlePressCart = useCallback(() => {}, []);
  // handle action press button add to cart
  const handlePressAddToCart = useCallback(() => {}, []);

  return (
    <View style={styles.Container}>
      <View style={styles.actionsWrapper}>
        <Pressable onPress={handlePressBack}>
          <Image style={styles.backIcon} source={IMAGES.iconBack} />
        </Pressable>
        <Pressable onPress={handlePressCart}>
          <Image style={styles.cartIcon} source={IMAGES.iconCart} />
        </Pressable>
      </View>
      <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <View style={styles.headerImageWrapper}>
            {isProcessing
              ? null
              : productById && (
                  <ImageBackground style={styles.image} source={{ uri: productById[0]?.source }} />
                )}
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.productInfoContainer}>
            <View style={styles.productInfoWrapper}>
              {productById && (
                <>
                  <Title titleName={productById[0]?.title} titleStyles={styles.textTitle} />
                  <Title titleName={productById[0]?.type} titleStyles={styles.textValue} />
                </>
              )}
            </View>
            <View style={styles.productInfoWrapper}>
              <Title titleName='Price' titleStyles={styles.textTitle} />
              {productById && (
                <Title titleName={`$${productById[0]?.price}`} titleStyles={styles.textValue} />
              )}
            </View>
          </View>

          {/* image review  */}
          <ScrollView
            style={styles.productImageReview}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {productById &&
              productById[0]?.imageReview?.map((item: any) => (
                <Pressable style={styles.productImageReviewWrapper} key={item.id}>
                  <Image
                    style={styles.imagePreview}
                    source={{ uri: item.image }}
                    resizeMode='cover'
                  />
                </Pressable>
              ))}
          </ScrollView>
          {/* Product size */}
          <ProductSize />

          <View style={styles.descriptionContainer}>
            <Title titleName='Description' titleStyles={styles.textDescriptionTitle} />
            {productById && (
              <MoreLessText styleShowMoreText={styles.textContent} numberOfLines={3}>
                {productById[0]?.description}
              </MoreLessText>
            )}
          </View>

          <View style={styles.reviewContainer}>
            <View style={styles.reviewTitleWrapper}>
              <Title titleName='Reviews' titleStyles={styles.textReviewTitle} />
              <Title titleName='View All' titleStyles={styles.textTitle} />
            </View>
            <View style={styles.reviewWrapper}>
              <View style={styles.reviewItem}>
                <View style={styles.reviewItemWrapper}>
                  <View style={styles.reviewerInfoWrapper}>
                    {productById && (
                      <Image
                        style={styles.imageAvatar}
                        source={{ uri: productById[0]?.reviewer?.image }}
                      />
                    )}
                    <View style={styles.reviewerItemInfo}>
                      {productById && (
                        <Title
                          titleName={productById[0]?.reviewer?.name}
                          titleStyles={styles.textName}
                        />
                      )}
                      <View style={styles.reviewTime}>
                        <Image style={styles.imageClock} source={IMAGES.iconClock} />
                        {productById && (
                          <Text style={styles.textDate}>{productById[0]?.reviewer?.date}</Text>
                        )}
                      </View>
                    </View>
                  </View>
                  <View style={styles.reviewItemRating}>
                    <View style={styles.ratingTextWrapper}>
                      {productById && (
                        <Text style={styles.ratingTextPoint}>{productById[0]?.rating}</Text>
                      )}
                      <Text style={styles.ratingText}>rating</Text>
                    </View>
                    <Image style={styles.imageStar} source={IMAGES.ratingStart} />
                  </View>
                </View>
                <View style={styles.reviewItemContent}>
                  {productById && (
                    <MoreLessText styleShowMoreText={styles.textContent} numberOfLines={3}>
                      {productById[0]?.comment}
                    </MoreLessText>
                  )}
                </View>
              </View>
            </View>
          </View>

          <View style={styles.totalPriceContainer}>
            <View style={styles.totalPriceWrapper}>
              <View style={styles.textTotalWrapper}>
                {productById && (
                  <>
                    <Title titleName='Total Price' titleStyles={styles.textTotalPrice} />
                    <Title titleName='with VAT,SD' titleStyles={styles.textVAT} />
                  </>
                )}
              </View>
              {productById && (
                <Title titleName={`$${productById[0]?.price}`} titleStyles={styles.textPrice} />
              )}
            </View>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <Button
            testID='AddtoCartButton'
            text='Add to Cart'
            buttonStyles={[styles.bottomButton, styles.loginButton]}
            textStyles={[styles.textBottomButton]}
            onPress={handlePressAddToCart}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;
