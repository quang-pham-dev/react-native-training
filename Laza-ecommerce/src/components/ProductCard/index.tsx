import React, { memo } from 'react';
import { Image, ImageBackground, Pressable, Text, View } from 'react-native';
// Components
import Title from 'components/Title';
// Theme
import { IMAGES } from 'styles/themes';
// Types
import { ProductCardProps } from 'types/Products';
// Styles
import styles from './styles';

const ProductCard = ({
  product,
  handleNavigationProductDetailScreen,
  handleLikeProduct,
  productCardStyles,
}: ProductCardProps) => {
  return (
    <Pressable
      onPress={() => handleNavigationProductDetailScreen(product.id)}
      style={[styles.productCardContainer, productCardStyles]}
    >
      <View style={styles.imageWrapper}>
        <ImageBackground style={styles.image} source={product.source} />
        <Pressable onPress={handleLikeProduct} style={styles.iconHeartWrapper}>
          <Image
            style={styles.iconHeart}
            source={product.like ? IMAGES.iconHeart : IMAGES.iconHeart}
          />
        </Pressable>
      </View>
      <Title titleStyles={styles.productTitle} titleName={product.productTitle} />
      <Title titleStyles={styles.productType} titleName={product.productType} />
      <Text style={styles.price}>{`$ ${product.productPrice || 0}`}</Text>
    </Pressable>
  );
};

export default memo(ProductCard);
