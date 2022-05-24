import React, { memo, useCallback } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import isEqual from 'react-fast-compare';

// Components
import Label from 'components/Label';

// Types
import { IBrandCardProps } from 'types/models/Brands';

// Themes
import Fonts from 'themes/Fonts';
import Colors from 'themes/Colors';

// Styles
import styles from './styles';

const BrandCard = ({
  brand,
  handleNavigationBrandDetailScreen,
  brandCardStyles,
}: IBrandCardProps) => {
//   console.log('BrandCard render');
  const handleNavigationBrandDetailScreenPress = useCallback(() => {
    handleNavigationBrandDetailScreen(brand.id);
  }, [brand.id, handleNavigationBrandDetailScreen]);
  return (
    <TouchableOpacity
      testID='brandCard'
      onPress={handleNavigationBrandDetailScreenPress}
      style={[styles.brandCardContainer, brandCardStyles]}>
      <View style={[styles.brandCardWrapper]}>
        <View style={styles.brandLogoWrapper}>
          <Image style={styles.brandLogo} source={{ uri: brand.logoUrl }} />
        </View>
        <Label
          lineHeight={16.5}
          fontSize={Fonts.size.normal}
          fontFamily={Fonts.fontFamily.Inter_500Medium}
          color={Colors.textBlack}
          labelName={brand.name}></Label>
      </View>
    </TouchableOpacity>
  );
};

export default memo(BrandCard, isEqual);
