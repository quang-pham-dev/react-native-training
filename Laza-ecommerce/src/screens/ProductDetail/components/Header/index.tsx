import React, { useCallback } from 'react';
import { View } from 'react-native';

// LIBS
import FastImage from 'react-native-fast-image';

// Components
import Button from 'components/Button';

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
  }, []);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.actionsWrapper}>
        <Button icon={IMAGES.iconBack} onPress={handlePressBack} type='Circle' />
        <Button icon={IMAGES.iconCart} type='Circle' />
      </View>
      {/* End action header */}

      <View style={styles.headerImageWrapper}>
        {Boolean(source) && (
          <FastImage
            style={styles.image}
            source={{
              uri: source,
              priority: FastImage.priority.normal
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        )}
      </View>
      {/* End Header block */}
    </View>
  );
};

export default Header;
