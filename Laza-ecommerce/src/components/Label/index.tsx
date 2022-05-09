import React, { memo } from 'react';
import { Text, View } from 'react-native';
// Types
import { labelTextProps } from 'types/Label';
// Styles
import styles from './styles';

const Label = ({
  children,
  labelName,
  fontSize,
  fontFamily,
  color,
  labelWrapperStyles,
  lineHeight,
  ...props
}: labelTextProps) => {
  const labelStyles = {
    fontSize: fontSize,
    fontFamily: fontFamily,
    color,
    ...(lineHeight && { lineHeight }),
  };
  return (
    <View style={labelWrapperStyles}>
      <Text style={[styles.labelText, labelStyles]} {...props}>
        {labelName}
        {children}
      </Text>
    </View>
  );
};

export default memo(Label);
