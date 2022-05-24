import React, { memo } from 'react';
import { Text, TextInput, View } from 'react-native';
import isEqual from 'react-fast-compare';

// Types
import { ITextInputProps } from 'types/components/TextInput';

// Styles
import styles from './styles';

const Input = ({
  label,
  labelStyle,
  value,
  placeholder,
  textInputStyles = {},
  secureTextEntry,
  onChangeText = () => {},
  onBlur = () => {},
}: ITextInputProps) => {
  return (
    <View style={styles.inputWrap}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholder={placeholder}
        style={[styles.input, textInputStyles]}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default memo(Input, isEqual);
