import React, { memo, useCallback } from 'react';
import { Image, ImageBackground, Pressable, Text, View } from 'react-native';

// Lib
import isEqual from 'react-fast-compare';

// Components
import Title from 'components/Title';

// Types
import { IProductCardProps } from 'types/models/Products';

// Themes
import IMAGES from 'themes/Images';

// Styles
import styles from './styles';

const ProductCard = ({
  product,
  onNavigateProductDetailScreen,
  onPressLikeProduct,
  productCardStyles,
}: IProductCardProps) => {
  const onNavigateProductDetailScreenHandler = useCallback(() => {
    onNavigateProductDetailScreen(product.id);
  }, [product.id, onNavigateProductDetailScreen]);

  const onPressLikeProductHandler = useCallback(() => {
    onPressLikeProduct(product);
  }, [product, onPressLikeProduct]);

  return (
    <Pressable
      testID='productCard'
      onPress={onNavigateProductDetailScreenHandler}
      style={[styles.productCardContainer, productCardStyles]}>
      <View style={styles.imageWrapper}>
        <ImageBackground style={styles.image} source={{ uri: product.source }} />
        <Pressable onPress={onPressLikeProductHandler} style={styles.iconHeartWrapper}>
          <Image
            style={styles.iconHeart}
            source={product.like ? IMAGES.iconHeartLiked : IMAGES.iconHeart}
          />
        </Pressable>
      </View>
      <Title titleStyles={styles.productTitle} titleName={product.title} />
      <Title titleStyles={styles.productType} titleName={product.type} />
      <Text style={styles.price}>{`$ ${product.price || 0}`}</Text>
    </Pressable>
  );
};

export default memo(ProductCard, isEqual);
