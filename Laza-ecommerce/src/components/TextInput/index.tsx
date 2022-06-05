import React, { memo, useCallback } from 'react';
import { Text, TextInput, View } from 'react-native';

// LIBS
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
  textInputStyles,
  secureTextEntry,
  onChangeText,
  onBlur,
  onSubmitEditing,
}: ITextInputProps) => {
  const [valueState, setValueState] = React.useState(value);

  const handleTextChange = useCallback(
    (text: string) => {
      setValueState(text);
      onChangeText(text);
    },
    [onChangeText, setValueState],
  );

  return (
    <View style={styles.inputWrap}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <TextInput
        value={valueState}
        onChangeText={handleTextChange}
        onBlur={onBlur}
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder}
        style={[styles.input, textInputStyles]}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default memo(Input, isEqual);
