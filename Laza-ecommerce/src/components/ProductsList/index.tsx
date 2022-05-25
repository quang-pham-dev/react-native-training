import React, { memo, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import isEqual from 'react-fast-compare';

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
  onNavigateProductDetailScreen,
  products,
  onPressLikeProduct,
}: IProductsListProps) => {
  const onNavigateProductDetailScreenHander = useCallback(
    (id: string) => {
      onNavigateProductDetailScreen(id);
    },
    [onNavigateProductDetailScreen],
  );

  const onPressLikeProductHandler = useCallback(() => {
    onPressLikeProduct(products);
  }, [products, onPressLikeProduct]);

  // handle render when empty list
  const renderEmptyList = () => <Title titleName={PRODUCTS_EMPTY_RESULT} />;

  // handle render Card component
  const renderProductCard = useCallback(
    ({ item }: { item: IProductsCardListProps }) => (
      <ProductCard
        testID='productCard'
        productCardStyles={styles.productCard}
        product={item}
        onNavigateProductDetailScreen={onNavigateProductDetailScreenHander}
        onPressLikeProduct={onPressLikeProductHandler}
      />
    ),
    [onNavigateProductDetailScreenHander, onPressLikeProduct],
  );

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        data={products}
        renderItem={renderProductCard}
        keyExtractor={product => product.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyList}
      />
    </View>
  );
};
export default memo(ProductsList, isEqual);
