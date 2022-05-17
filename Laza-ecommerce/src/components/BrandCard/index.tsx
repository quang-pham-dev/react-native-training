import React, { memo } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
// Components
import Label from 'components/Label';
// Type
import { BrandCardProps } from 'types/Brands';
// Theme
import { Colors, Fonts } from 'styles/themes';
// Styles
import styles from './styles';

const BrandCard = ({
  brand,
  handleNavigationBrandDetailScreen,
  brandCardStyles,
}: BrandCardProps) => {
  return (
    <TouchableOpacity
      onPress={() => handleNavigationBrandDetailScreen(brand.id)}
      style={[styles.brandCardContainer, brandCardStyles]}
    >
      <View style={[styles.brandCardWrapper]}>
        <View style={styles.brandLogoWrapper}>
          <Image style={styles.brandLogo} source={{ uri: brand.logo_url }} />
        </View>
        <Label
          lineHeight={16.5}
          fontSize={Fonts.size.normal}
          fontFamily={Fonts.fontFamily.Inter_500Medium}
          color={Colors.textBlack}
          labelName={brand.name}
        ></Label>
      </View>
    </TouchableOpacity>
  );
};

export default memo(BrandCard);
