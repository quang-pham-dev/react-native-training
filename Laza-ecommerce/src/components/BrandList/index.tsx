import React, { memo } from 'react';
import { FlatList, View, Text } from 'react-native';
// Components
import BrandCard from 'components/BrandCard';
import Label from 'components/Label';
// Type
import { BrandCardListProps, BrandsListProps } from 'types/Brands';
// Theme
import { Colors, Fonts } from 'styles/themes';
// Styles
import styles from './styles';

const BrandsCardList = ({ handleNavigationBrandDetailScreen, brandsData }: BrandsListProps) => {
  // handle render Card component
  const renderBrandCard = ({ item }: { item: BrandCardListProps }) => (
    <BrandCard brand={item} handleNavigationBrandDetailScreen={handleNavigationBrandDetailScreen} />
  );

  const renderEmptyList = () => <Text>Empty Brand.</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.brandTitle}>
        <Label
          labelName='Choose Brand'
          fontSize={Fonts.size.default}
          lineHeight={Fonts.lineHeight.sm}
          fontFamily={Fonts.fontFamily.Inter_500Medium}
          color={Colors.textBlack}
        />
        <Label
          labelName='View All'
          fontSize={Fonts.size.small}
          lineHeight={Fonts.lineHeight.xs}
          fontFamily={Fonts.fontFamily.Inter_400Regular}
          color={Colors.textGray}
        />
      </View>
      <FlatList
        nestedScrollEnabled
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

export default memo(BrandsCardList);
