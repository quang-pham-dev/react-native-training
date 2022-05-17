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
      fontSize={17}
      fontFamily={Fonts.fontFamily.Inter_400Regular}
      color={Colors.textBlack}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.productTitle}>
        <Label
          labelName='New Arraival'
          fontSize={17}
          lineHeight={18}
          fontFamily={Fonts.fontFamily.Inter_500Medium}
          color={Colors.textBlack}
        />
        <Label
          labelName='View All'
          fontSize={13}
          lineHeight={14}
          fontFamily={Fonts.fontFamily.Inter_400Regular}
          color={Colors.textGray}
        />
      </View>
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
