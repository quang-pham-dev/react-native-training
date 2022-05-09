import React, { memo } from 'react';
import { Text } from 'react-native';
// Types
import { titleProps } from 'types/Title';
// Styles
import styles from './styles';

const Title = ({
  titleName,
  fontSize,
  children,
  fontFamily,
  color,
  lineHeight,
  ...props
}: titleProps) => {
  const titleStyles = {
    fontSize: fontSize,
    fontFamily: fontFamily,
    color,
    ...(lineHeight && { lineHeight }),
  };
  return (
    <Text style={[styles.title, titleStyles]} {...props}>
      {titleName}
      {children}
    </Text>
  );
};

export default memo(Title);
