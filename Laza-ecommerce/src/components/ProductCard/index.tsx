import React, { memo, useCallback } from 'react';
import { Image, ImageBackground, Pressable, Text, View } from 'react-native';

// LIBS
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
  onPressProductCard,
  onPressLikeProduct,
  productCardStyles
}: IProductCardProps) => {
  // handle action press product card with id
  const handlePressCardProduct = useCallback(() => {
    onPressProductCard(product.id);
  }, [product.id, onPressProductCard]);

  // handle action press like product
  const handlePressLikeProduct = useCallback(() => {
    onPressLikeProduct(product);
  }, [product, onPressLikeProduct]);

  return (
    <Pressable
      testID='productCard'
      onPress={handlePressCardProduct}
      style={[styles.productCardContainer, productCardStyles]}
    >
      <View style={styles.imageWrapper}>
        <ImageBackground style={styles.image} source={{ uri: product?.source }} />
        <Pressable onPress={handlePressLikeProduct} style={styles.iconHeartWrapper}>
          <Image
            style={styles.iconHeart}
            source={product?.like ? IMAGES.iconHeartLiked : IMAGES.iconHeart}
          />
        </Pressable>
      </View>
      <Title titleStyles={styles.productTitle} titleName={product?.title} />
      <Title titleStyles={styles.productType} titleName={product?.type} />
      <Text style={styles.price}>{`$ ${product?.price}`}</Text>
    </Pressable>
  );
};

export default memo(ProductCard, isEqual);
