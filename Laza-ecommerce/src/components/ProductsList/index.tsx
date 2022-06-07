import React, { memo, useCallback, useContext, useRef } from 'react';
import { FlatList, View } from 'react-native';

// LIBS
import isEqual from 'react-fast-compare';

// Components
import ProductCard from 'components/ProductCard';
import Title from 'components/Title';
import LoadingIndicator from 'components/LoadingIndicator';

// Context
import { ProductsContext } from 'context/ProductsContext';

// Constants
import { PRODUCTS_EMPTY_RESULT } from 'constants/Products';

// Types
import { IProduct, IProductsListProps } from 'types/models/Products';

// Styles
import styles from './styles';

const ProductsList = ({
  onPressProductCard,
  products,
  onPressLikeProduct,
  onLoadMoreProducts,
  onScroll,
}: IProductsListProps) => {
  const { productState } = useContext(ProductsContext);

  const {
    isLoading,
    totalRows,
    productsByBrandId,
    totalRowsByBrandId,
    products: allProduct,
  } = productState || {};

  // handle action load more products
  const handleLoadMoreProducts = () => {
    let cacheEndReached = null;
    let productList = [];
    let totalProduct = 0;

    if (totalRows > totalRowsByBrandId) {
      productList = allProduct;
      totalProduct = totalRows;

      productList?.length < totalProduct && (cacheEndReached = onLoadMoreProducts);
    }
    if (totalRowsByBrandId <= totalRows) {
      productList = productsByBrandId;
      totalProduct = totalRowsByBrandId;

      productList?.length < totalProduct && (cacheEndReached = onLoadMoreProducts);
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
        productCardStyles={styles.productCard}
        product={item}
        onPressProductCard={handlePressProductCard}
        onPressLikeProduct={handlePressLikeProduct}
      />
    ),
    [handlePressProductCard, onPressLikeProduct],
  );

  // handle render Footer component
  const renderFooterComponent = () => {
    {
      Boolean(isLoading) && <LoadingIndicator />;
    }
    return null;
  };

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
        ListFooterComponent={renderFooterComponent}
        ListFooterComponentStyle={styles.listFooter}
        onEndReached={handleLoadMoreProducts()}
        onEndReachedThreshold={0.5}
        onScroll={onScroll}
        scrollEventThrottle={16}
      />
    </View>
  );
};
export default memo(ProductsList, isEqual);
