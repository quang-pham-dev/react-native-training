import React, { memo, useCallback } from 'react';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';

// LIBS
import isEqual from 'react-fast-compare';
import { Feather } from '@expo/vector-icons';

// Types
import { ITextInputProps } from 'types/components/TextInput';

// Styles
import styles from './styles';

// Themes
import Colors from 'themes/Colors';

const Input = ({
  label,
  labelStyle,
  value,
  placeholder,
  textInputStyles,
  iconRight,
  type = 'text',
  onChangeText,
  onBlur,
  onSubmitEditing
}: ITextInputProps) => {
  const [valueState, setValueState] = React.useState(value);
  const [showPassword, togglePassword] = React.useState(false);

  const handleTextChange = useCallback(
    (text: string) => {
      setValueState(text);
      onChangeText(text);
    },
    [onChangeText, setValueState]
  );

  return (
    <View style={styles.inputContainer}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={styles.inputWrapper}>
        <TextInput
          value={valueState}
          onChangeText={handleTextChange}
          onBlur={onBlur}
          onSubmitEditing={onSubmitEditing}
          placeholder={placeholder}
          style={[styles.input, textInputStyles]}
          secureTextEntry={type === 'password' && !showPassword}
        />
        {type === 'password' &&
          (!showPassword ? (
            <TouchableOpacity onPress={() => togglePassword(true)} style={[styles.iconRight]}>
              <Feather name={'eye-off'} size={20} color={Colors.textGray} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => togglePassword(false)} style={[styles.iconRight]}>
              <Feather name={'eye'} size={20} color={Colors.textGray} />
            </TouchableOpacity>
          ))}

        {iconRight && <TouchableOpacity style={[styles.iconRight]}>{iconRight}</TouchableOpacity>}
      </View>
    </View>
  );
};

export default memo(Input, isEqual);
