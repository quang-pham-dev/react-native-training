import React, { memo, useCallback } from 'react';
import { FlatList, View, Text } from 'react-native';

// Components
import BrandCard from 'components/BrandCard';
import Label from 'components/Label';

// Types
import { IBrandCardListProps, IBrandsListProps } from 'types/models/Brands';

// Themes
import Fonts from 'themes/Fonts';
import Colors from 'themes/Colors';

// Styles
import styles from './styles';

const BrandsCardList = ({ handleNavigationBrandDetailScreen, brandsData }: IBrandsListProps) => {
  // handle render Card component
  const renderBrandCard = ({ item }: { item: IBrandCardListProps }) => (
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
