import React, { useCallback } from 'react';
import { Image, View } from 'react-native';

// Components
import Button from 'components/Button';

// Theme
import IMAGES from 'themes/Images';

// Style
import styles from './styles';

type HeaderProps = {
  navigation: {
    goBack: () => void;
  };
  logoUrl: string;
};

const Header = ({ logoUrl, navigation }: HeaderProps) => {
  // handle back button
  const handlePressBackIcon = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={styles.container}>
      <Button icon={IMAGES.iconBack} onPress={handlePressBackIcon} type='Circle' />
      <View style={styles.brandLogoWrapper}>
        {Boolean(logoUrl) && <Image style={styles.brandLogo} source={{ uri: logoUrl }} />}
      </View>
      <Button icon={IMAGES.iconCart} type='Circle' />
    </View>
  );
};

export default Header;
