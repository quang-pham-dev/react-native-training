import React, {memo, useCallback, useState} from 'react'
import {
  NativeSyntheticEvent,
  Pressable,
  TextInputChangeEventData,
} from 'react-native'

// LIBS
import isEqual from 'react-fast-compare'
import Icon from 'react-native-vector-icons/Feather'

// Styles
import FlexStyled from '@components/Flex/Flex.styles'
import InputStyled from './Input.styles'

// Themes
import {Colors} from '@themes'

export enum InputType {
  NORMAL = 'normal',
  EMAIL = 'email',
  PHONE = 'phone',
  NUMBER = 'number',
  PASSWORD = 'password',
}

export enum KeyboardType {
  DEFAULT = 'default',
  NUMERIC = 'numeric',
  EMAIL_ADDRESS = 'email-address',
  ASCII_CAPABLE = 'ascii-capable',
  NUMBER_PUNCTUATION = 'numbers-and-punctuation',
  URL = 'url',
  NUMBER_PAD = 'number-pad',
  PHONE_PAD = 'phone-pad',
  NAME_PHONE_PAD = 'name-phone-pad',
  DECIMAL_PAD = 'decimal-pad',
  TWITTER = 'twitter',
  WEB_SEARCH = 'web-search',
  VISIBLE_PASSWORD = 'visible-password',
}

type InputProps = {
  type?: InputType
  value: string
  label?: string
  placeholder?: string
  icon?: React.ReactNode
  keyboardType?: KeyboardType
  autoFocus?: boolean
  onBlur?: () => void
  onChange: (value: string) => void | undefined
  onEndEditing?: (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
    type: InputType,
  ) => void
  onClearInput?: () => void
  onSubmitEditing?: () => void
  inputProps?: {
    [key: string]: string | number
  }
}

const Input = ({
  type = InputType.NORMAL,
  value,
  label,
  placeholder,
  icon,
  keyboardType = KeyboardType.DEFAULT,
  onChange,
  onBlur,
  onSubmitEditing,
  inputProps,
}: InputProps) => {
  const isPassword = type === InputType.PASSWORD
  const [displayValue, setDisplayValue] = useState(value)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleTextChange = useCallback(
    (text: string) => {
      setDisplayValue(text)
      onChange(text)
    },
    [onChange, setDisplayValue],
  )

  const handleTogglePassword = (): void => setShowPassword(!showPassword)

  return (
    <FlexStyled.Default>
      {label && <InputStyled.LabelStyled>{label}</InputStyled.LabelStyled>}

      <InputStyled.Wrapper>
        <InputStyled.InputField
          type={type}
          value={displayValue}
          onChangeText={handleTextChange}
          onBlur={onBlur}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          onSubmitEditing={onSubmitEditing}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={isPassword && !showPassword}
          {...inputProps}
        />
        {isPassword && (
          <InputStyled.IconEyeWrapper onPress={handleTogglePassword}>
            {showPassword ? (
              <Icon name="eye-off" size={20} color={Colors.palette.gray} />
            ) : (
              <Icon name="eye" size={20} color={Colors.palette.gray} />
            )}
          </InputStyled.IconEyeWrapper>
        )}
        {icon && <Pressable>{icon}</Pressable>}
      </InputStyled.Wrapper>
    </FlexStyled.Default>
  )
}

export default memo(Input, isEqual)
