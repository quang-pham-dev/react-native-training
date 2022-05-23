import React, { memo, useCallback } from 'react';
import { FlatList, View } from 'react-native';

// Components
import ProductCard from 'components/ProductCard';
import Title from 'components/Title';

// Constants
import { PRODUCTS_EMPTY_RESULT } from 'constants/Products';

// Types
import { IProductsCardListProps, IProductsListProps } from 'types/models/Products';

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
  const renderEmptyList = () => <Title titleName={PRODUCTS_EMPTY_RESULT} />;

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
