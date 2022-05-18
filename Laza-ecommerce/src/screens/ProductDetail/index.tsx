import React, { memo, useContext, useEffect } from 'react';
import { Alert, Image, ImageBackground, Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// Components
import Button from 'components/Button';
import { MoreLessText } from 'components/LessMoreText';
import { ProductSize } from 'components/ProductDetail/ProductSize/ProductSize';
import Title from 'components/Title';
// API
import { productsService } from 'api/products.api';
// Context
import { AppContext } from 'context/AppContext';
// Theme
import { IMAGES } from 'styles/themes';
// Types
import { FETCH_PRODUCTS_BY_ID } from 'types/Actions';
import { ProductDetailProps } from 'types/Screens';
// Style
import styles from './styles';

const ProductDetail = ({ navigation, route }: ProductDetailProps) => {
  const id = route.params;
  const { productState, productDispatch } = useContext(AppContext);

  const { productsById } = productState;

  const handlePressBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const { data } = await productsService.fetchProductById(id);
        productDispatch({
          type: FETCH_PRODUCTS_BY_ID,
          payload: data,
        });
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    };
    fetchProductById();
  }, [id, productDispatch]);

  // handle action press button cart
  const handlePressCart = () => {};

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
            {productsById && (
              <ImageBackground style={styles.image} source={{ uri: productsById[0].source }} />
            )}
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.productInfoContainer}>
            <View style={styles.productInfoWrapper}>
              {productsById && (
                <>
                  <Title titleName={productsById[0].title} titleStyles={styles.textTitle} />
                  <Title titleName={productsById[0].type} titleStyles={styles.textValue} />
                </>
              )}
            </View>
            <View style={styles.productInfoWrapper}>
              <Title titleName='Price' titleStyles={styles.textTitle} />
              {productsById && (
                <Title titleName={`$${productsById[0].price}`} titleStyles={styles.textValue} />
              )}
            </View>
          </View>

          {/* image review  */}
          <ScrollView
            style={styles.productImageReview}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {productsById &&
              productsById[0]?.imageReview?.map((item: any) => (
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
            {productsById && (
              <MoreLessText styleShowMoreText={styles.textContent} numberOfLines={3}>
                {productsById[0].description}
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
                    {productsById && (
                      <Image
                        style={styles.imageAvatar}
                        source={{ uri: productsById[0]?.reviewer?.image }}
                      />
                    )}
                    <View style={styles.reviewerItemInfo}>
                      {productsById && (
                        <Title
                          titleName={productsById[0]?.reviewer?.name}
                          titleStyles={styles.textName}
                        />
                      )}
                      <View style={styles.reviewTime}>
                        <Image style={styles.imageClock} source={IMAGES.iconClock} />
                        {productsById && (
                          <Text style={styles.textDate}>{productsById[0]?.reviewer?.date}</Text>
                        )}
                      </View>
                    </View>
                  </View>
                  <View style={styles.reviewItemRating}>
                    <View style={styles.ratingTextWrapper}>
                      {productsById && (
                        <Text style={styles.ratingTextPoint}>{productsById[0].rating}</Text>
                      )}
                      <Text style={styles.ratingText}>rating</Text>
                    </View>
                    <Image style={styles.imageStar} source={IMAGES.ratingStart} />
                  </View>
                </View>
                <View style={styles.reviewItemContent}>
                  {productsById && (
                    <MoreLessText styleShowMoreText={styles.textContent} numberOfLines={3}>
                      {productsById[0].comment}
                    </MoreLessText>
                  )}
                </View>
              </View>
            </View>
          </View>

          <View style={styles.totalPriceContainer}>
            <View style={styles.totalPriceWrapper}>
              <View style={styles.textTotalWrapper}>
                {productsById && (
                  <>
                    <Title titleName='Total Price' titleStyles={styles.textTotalPrice} />
                    <Title titleName='with VAT,SD' titleStyles={styles.textVAT} />
                  </>
                )}
              </View>
              {productsById && (
                <Title titleName={`$${productsById[0].price}`} titleStyles={styles.textPrice} />
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
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(ProductDetail);
