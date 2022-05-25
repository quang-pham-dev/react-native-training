import React, { memo, useCallback } from 'react';
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
  const [valueState, setValueState] = React.useState(value);

  const onChangeTextHandler = useCallback(
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
        onChangeText={onChangeTextHandler}
        onBlur={onBlur}
        placeholder={placeholder}
        style={[styles.input, textInputStyles]}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default memo(Input, isEqual);
