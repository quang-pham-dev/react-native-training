import React, { memo, useCallback } from 'react';
import { Image, ImageBackground, Pressable, Text, View } from 'react-native';

// Components
import Title from 'components/Title';

// Types
import { IProductCardProps } from 'types/models/Products';

// Themes
import IMAGES from 'themes/Images';

// Styles
import styles from './styles';

const ProductCardList = ({
  product,
  handleNavigationProductDetailScreen,
  handleLikeProduct,
  productCardStyles,
}: IProductCardProps) => {
  const handleNavigationProductDetailScreenPress = useCallback(() => {
    handleNavigationProductDetailScreen(product.id);
  }, [product.id, handleNavigationProductDetailScreen]);

  return (
    <Pressable
      testID='productCard'
      onPress={handleNavigationProductDetailScreenPress}
      style={[styles.productCardContainer, productCardStyles]}>
      <View style={styles.imageWrapper}>
        <ImageBackground style={styles.image} source={{ uri: product.source }} />
        <Pressable onPress={handleLikeProduct} style={styles.iconHeartWrapper}>
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

export default memo(ProductCardList);
