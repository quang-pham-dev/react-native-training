import React, { useCallback } from 'react';
import { View } from 'react-native';

// LIBS
import { DrawerActions } from '@react-navigation/native';

// Components
import Button from 'components/Button';

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
      <Button icon={IMAGES.iconMenu} onPress={handleToggleMenu} type='Circle' />
      <Button icon={IMAGES.iconCart} type='Circle' />
    </View>
  );
};

export default Header;
