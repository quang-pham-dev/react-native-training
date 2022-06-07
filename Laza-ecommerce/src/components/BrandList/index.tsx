import React, { memo, useCallback, useContext } from 'react';
import { FlatList, View } from 'react-native';

// LIBS
import isEqual from 'react-fast-compare';

// Context
import { BrandsContext } from 'context/BrandsContext';

// Components
import BrandCard from 'components/BrandCard';
import LoadingIndicator from 'components/LoadingIndicator';
import Title from 'components/Title';

// Constants
import { BRANDS_EMPTY_RESULT } from 'constants/Brands';

// Types
import { IBrandCardListProps, IBrandsListProps } from 'types/models/Brands';

// Styles
import styles from './styles';

const BrandsCardList = ({ onPressBrandCard, brands, onLoadMoreBrands }: IBrandsListProps) => {
  const { brandState } = useContext(BrandsContext);

  const { totalRowsOfBrands, isLoading } = brandState || {};

  // handle action when press card brand with id
  const handlePressBrandCard = useCallback(
    (id: string) => {
      onPressBrandCard(id);
    },
    [onPressBrandCard],
  );

  // handle action load more brands
  const handleLoadMoreBrands = () => {
    let cacheEndReached = null;
    brands?.length < totalRowsOfBrands && (cacheEndReached = onLoadMoreBrands);

    return cacheEndReached;
  };

  // handle render Card component
  const renderBrandCard = ({ item }: { item: IBrandCardListProps }) => (
    <BrandCard brand={item} onPressBrandCard={handlePressBrandCard} />
  );

  // render empty list
  const renderEmptyList = () => <Title titleName={BRANDS_EMPTY_RESULT} />;

  // handle render Footer component
  const renderFooterComponent = () => {
    {
      isLoading && <LoadingIndicator />;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={brands}
        renderItem={renderBrandCard}
        keyExtractor={brand => brand.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={renderEmptyList}
        ListFooterComponent={renderFooterComponent}
        onEndReached={handleLoadMoreBrands()}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default memo(BrandsCardList, isEqual);
