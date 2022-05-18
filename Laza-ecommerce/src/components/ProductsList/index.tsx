import React, { memo } from 'react';
import { FlatList, View } from 'react-native';
// Components
import Label from 'components/Label';
import ProductCard from 'components/ProductCard';
// Theme
import { Colors, Fonts } from 'styles/themes';
// Type
import { ProductsCardListProps, ProductsListProps } from 'types/Products';
// Styles
import styles from './styles';

const ProductsList = ({
  handleNavigationProductDetailScreen,
  productsData,
  handleLikeProduct,
}: ProductsListProps) => {
  // handle render Card component
  const renderProductCard = ({ item }: { item: ProductsCardListProps }) => (
    <ProductCard
      testID='productCardList'
      productCardStyles={styles.productCard}
      product={item}
      handleNavigationProductDetailScreen={handleNavigationProductDetailScreen}
      handleLikeProduct={() => handleLikeProduct(item)}
    />
  );

  // handle render when empty list
  const renderEmptyList = () => (
    <Label
      labelName='No Products!'
      fontSize={Fonts.size.default}
      fontFamily={Fonts.fontFamily.Inter_400Regular}
      color={Colors.textBlack}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        data={productsData}
        renderItem={renderProductCard}
        keyExtractor={product => product.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyList}
      />
    </View>
  );
};
export default memo(ProductsList);
