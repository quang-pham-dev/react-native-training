import React, { memo } from 'react';
import { TextInput, View } from 'react-native';
// Types
import { TextInputProps } from 'types/TextInput';
// Styles
import styles from './styles';

const Input = ({
  value,
  autoFocus,
  textInputStyles = {},
  placeholder,
  secureTextEntry,
  onChangeText,
}: TextInputProps) => {
  return (
    <View style={[styles.inputContainer]}>
      <TextInput
        style={[styles.input, textInputStyles]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autoFocus={autoFocus}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default memo(Input);
