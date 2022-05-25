import React, { memo, useCallback } from 'react';
import { FlatList, View, Text } from 'react-native';
import isEqual from 'react-fast-compare';

// Components
import BrandCard from 'components/BrandCard';
import Label from 'components/Label';
import Title from 'components/Title';

// Constants
import { BRANDS_EMPTY_RESULT } from 'constants/Brands';

// Types
import { IBrandCardListProps, IBrandsListProps } from 'types/models/Brands';

// Styles
import styles from './styles';

const BrandsCardList = ({ handleNavigationBrandDetailScreen, brandsData }: IBrandsListProps) => {
  const handleNavigationBrandDetailPress = useCallback(
    (id: string) => {
      handleNavigationBrandDetailScreen(id);
    },
    [handleNavigationBrandDetailScreen],
  );

  // handle render Card component
  const renderBrandCard = ({ item }: { item: IBrandCardListProps }) => (
    <BrandCard brand={item} handleNavigationBrandDetailScreen={handleNavigationBrandDetailPress} />
  );

  const renderEmptyList = () => <Title titleName={BRANDS_EMPTY_RESULT} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={brandsData}
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
