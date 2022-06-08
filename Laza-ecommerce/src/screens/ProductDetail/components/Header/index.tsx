import React, { memo, useCallback } from 'react';
import { Alert, Image, ImageBackground, Pressable, View } from 'react-native';

// LIBS
import isEqual from 'react-fast-compare';

// Theme
import IMAGES from 'themes/Images';

// Types
import { IProductDetailHeaderProps } from 'types/screens/ProductDetail';

// Style
import styles from './styles';

const Header = ({ source, navigation }: IProductDetailHeaderProps) => {
  // handle back button
  const handlePressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.actionsWrapper}>
        <Pressable onPress={handlePressBack}>
          <Image style={styles.backIcon} source={IMAGES.iconBack} />
        </Pressable>
        <Pressable>
          <Image style={styles.cartIcon} source={IMAGES.iconCart} />
        </Pressable>
      </View>
      {/* End action header */}

      <View style={styles.headerImageWrapper}>
        {Boolean(source) && <ImageBackground style={styles.image} source={{ uri: source }} />}
      </View>
      {/* End Header block */}
    </View>
  );
};

export default memo(Header, isEqual);
