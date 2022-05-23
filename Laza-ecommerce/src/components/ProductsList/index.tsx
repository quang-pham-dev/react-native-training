import React, { memo, useCallback } from 'react';
import { FlatList, View } from 'react-native';

// Components
import Label from 'components/Label';
import ProductCard from 'components/ProductCard';

// Types
import { Product, IProductsCardListProps, IProductsListProps } from 'types/models/Products';

// Themes
import Fonts from 'themes/Fonts';
import Colors from 'themes/Colors';

// Styles
import styles from './styles';

const ProductsList = ({
  handleNavigationProductDetailScreen,
  productsData,
  handleLikeProduct,
}: IProductsListProps) => {
  const handleNavigationProductDetailPress = useCallback(
    (id: string) => {
      handleNavigationProductDetailScreen(id);
    },
    [handleNavigationProductDetailScreen],
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

  // handle render Card component
  const renderProductCard = useCallback(
    ({ item }: { item: IProductsCardListProps }) => (
      <ProductCard
        testID='productCardList'
        productCardStyles={styles.productCard}
        product={item}
        handleNavigationProductDetailScreen={handleNavigationProductDetailPress}
        handleLikeProduct={() => handleLikeProduct(item)}
      />
    ),
    [handleNavigationProductDetailPress, handleLikeProduct],
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
