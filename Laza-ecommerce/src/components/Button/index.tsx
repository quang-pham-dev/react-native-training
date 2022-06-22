import React, { memo } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

// Types
import { IButtonProps } from 'types/components/Button';

// Styles
import styles from './styles';

// Themes
import Fonts from 'themes/Fonts';
import Colors from 'themes/Colors';

const Button = ({
  backgroundColor,
  onPress,
  text,
  icon,
  disabled = false,
  children,
  type
}: IButtonProps) => {
  let buttonStyles;
  let textStyles;

  let textSocialStyles = {
    fontSize: Fonts.size.default,
    fontFamily: Fonts.fontFamily.Inter_600SemiBold,
    color: Colors.white,
    lineHeight: Fonts.lineHeight.lg
  };

  switch (type) {
    case 'Circle':
      buttonStyles = {
        ...styles.backButton
      };
      break;
    case 'Bottom':
      buttonStyles = {
        ...styles.bottomButton
      };

      break;
    case 'Social':
      buttonStyles = {
        ...styles.socialButton,
        backgroundColor
      };
      textStyles = {
        ...textSocialStyles
      };
      break;

    default:
      buttonStyles = {};
      break;
  }

  return (
    <TouchableOpacity
      style={[buttonStyles]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}>
      {icon && <Image style={styles.icon} source={icon} />}
      {text && <Text style={[styles.text, textStyles]}>{text}</Text>}
      {children}
    </TouchableOpacity>
  );
};

export default memo(Button);
