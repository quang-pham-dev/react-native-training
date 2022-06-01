import React, { memo, useCallback, useContext } from 'react';
import { FlatList, View } from 'react-native';

// LIBS
import isEqual from 'react-fast-compare';

// Components
import ProductCard from 'components/ProductCard';
import Title from 'components/Title';
import LoadingIndicator from 'components/LoadingIndicator';

// Context
import { AppContext } from 'context/AppContext';

// Constants
import { PRODUCTS_EMPTY_RESULT } from 'constants/Products';

// Types
import { IProduct, IProductsListProps } from 'types/models/Products';
import { LOADING_SIZE } from 'types/components/LoadingIndicator';

// Styles
import styles from './styles';

const ProductsList = ({
  onPressProductCard,
  products,
  onPressLikeProduct,
  onLoadMoreProducts,
}: IProductsListProps) => {
  const { productState } = useContext(AppContext);

  const { totalRows, isProcessing } = productState || {};

  // handle action load more products
  const handleLoadMoreProducts = (products: IProduct[]) => {
    let cacheEndReached = null;

    if (products?.length < totalRows) {
      cacheEndReached = onLoadMoreProducts;
    }

    return cacheEndReached;
  };

  // handle action when press product card with id
  const handlePressProductCard = useCallback(
    (id: string) => {
      onPressProductCard(id);
    },
    [onPressProductCard],
  );

  // handle action when press like product card
  const handlePressLikeProduct = useCallback(() => {
    onPressLikeProduct(products);
  }, [products, onPressLikeProduct]);

  // handle render when empty list
  const renderEmptyList = () => <Title titleName={PRODUCTS_EMPTY_RESULT} />;

  // handle render Card component
  const renderProductCard = useCallback(
    ({ item }: { item: IProduct }) => (
      <ProductCard
        testID='productCard'
        key={item.id}
        productCardStyles={styles.productCard}
        product={item}
        onPressProductCard={handlePressProductCard}
        onPressLikeProduct={handlePressLikeProduct}
      />
    ),
    [handlePressProductCard, onPressLikeProduct],
  );

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        data={products}
        initialNumToRender={6}
        renderItem={renderProductCard}
        keyExtractor={product => product.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyList}
        ListFooterComponentStyle={styles.listFooter}
        onEndReached={handleLoadMoreProducts(products)}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};
export default memo(ProductsList, isEqual);
