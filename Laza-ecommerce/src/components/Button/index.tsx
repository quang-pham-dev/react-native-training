import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
// Types
import { ButtonProps } from 'types/Button';
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
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyles]}
      {...props}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      {icon && <Image style={[styles.icon, iconStyles]} source={icon} />}
      {text && <Text style={[styles.text , textStyles]}>{text}</Text>}
      {children}
    </TouchableOpacity>
  );
};

export default Button;
