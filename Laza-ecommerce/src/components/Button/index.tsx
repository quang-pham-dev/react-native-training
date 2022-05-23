import React, { memo } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

// Types
import { IButtonProps } from 'types/components/Button';

// Styles
import styles from './styles';

const Button = ({
  onPress = () => {},
  text,
  textStyles,
  buttonStyles,
  icon,
  iconStyles,
  disabled,
  children,
}: IButtonProps) => {
  return (
    <TouchableOpacity
      style={[buttonStyles]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}>
      {icon && <Image style={[styles.icon, iconStyles]} source={icon} />}
      {text && <Text style={[textStyles]}>{text}</Text>}
      {children}
    </TouchableOpacity>
  );
};

export default memo(Button);
