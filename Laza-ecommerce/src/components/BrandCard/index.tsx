import React, { memo, useCallback } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

// LIBS
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

const BrandCard = ({ brand, onPressBrandCard, brandCardStyles }: IBrandCardProps) => {
  // handle action press card brand
  const handlePressBrandCard = useCallback(() => {
    onPressBrandCard(brand.id);
  }, [brand.id, onPressBrandCard]);

  return (
    <TouchableOpacity
      testID='brandCard'
      onPress={handlePressBrandCard}
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
          labelName={brand.name}
        />
      </View>
    </TouchableOpacity>
  );
};

export default memo(BrandCard, isEqual);
