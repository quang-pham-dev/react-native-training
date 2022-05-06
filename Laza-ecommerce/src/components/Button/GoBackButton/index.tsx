import React, { memo } from 'react';
import { Image, TouchableOpacity } from 'react-native';
// Types
import { GoBackButtonProps } from 'types/Button';
// Styles
import styles from './styles';

const GoBackButton = ({
  icon,
  disabled,
  buttonStyles = [],
  onPress = () => {},
}: GoBackButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyles]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      {icon && <Image style={styles.icon} source={icon} />}
    </TouchableOpacity>
  );
};

export default memo(GoBackButton);
