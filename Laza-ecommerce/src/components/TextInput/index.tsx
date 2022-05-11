import React from 'react';
import { Text, TextInput, View } from 'react-native';
// Types
import { TextInputProps } from 'types/TextInput';
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
  ...props
}: TextInputProps) => {
  return (
    <View style={styles.inputWrap}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <TextInput
        {...props}
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

export default Input;
