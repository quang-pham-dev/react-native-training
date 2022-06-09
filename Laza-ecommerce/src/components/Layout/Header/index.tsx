import React, { memo, useCallback } from 'react';
import { Image, Pressable, View } from 'react-native';

// LIBS
import { DrawerActions } from '@react-navigation/native';

// Types
import { IHeaderProps } from 'types/screens/Layout';

// Themes
import IMAGES from 'themes/Images';

// Styles
import styles from './styles';

const Header = ({ navigation }: IHeaderProps) => {
  // Toggle menu open
  const handleToggleMenu = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer());
  }, []);

  return (
    <View style={styles.container}>
      <Pressable style={styles.menuWrapper} onPress={handleToggleMenu}>
        <Image style={styles.menuIcon} source={IMAGES.iconMenu} />
      </Pressable>
      <Pressable style={styles.cartWrapper}>
        <Image style={styles.cartIcon} source={IMAGES.iconCart} />
      </Pressable>
    </View>
  );
};

export default memo(Header);
