import React, { memo, useCallback } from 'react';
import { FlatList, View } from 'react-native';

// LIBS
import isEqual from 'react-fast-compare';

// Components
import BrandCard from 'components/BrandCard';
import Title from 'components/Title';

// Constants
import { BRANDS_EMPTY_RESULT } from 'constants/Brands';

// Types
import { IBrandCardListProps, IBrandsListProps } from 'types/models/Brands';

// Styles
import styles from './styles';

const BrandsCardList = ({ onNavigateBrandDetailScreen, brands }: IBrandsListProps) => {
  const onNavigateBrandDetailScreenHandler = useCallback(
    (id: string) => {
      onNavigateBrandDetailScreen(id);
    },
    [onNavigateBrandDetailScreen],
  );

  // handle render Card component
  const renderBrandCard = ({ item }: { item: IBrandCardListProps }) => (
    <BrandCard brand={item} onNavigateBrandDetailScreen={onNavigateBrandDetailScreenHandler} />
  );

  const renderEmptyList = () => <Title titleName={BRANDS_EMPTY_RESULT} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={brands}
        renderItem={renderBrandCard}
        keyExtractor={brand => brand.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={renderEmptyList}
      />
    </View>
  );
};

export default memo(BrandsCardList, isEqual);
