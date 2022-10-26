import React from 'react'
import {ImageSourcePropType} from 'react-native'

// LIBS
import {s} from 'react-native-size-matters/extend'

// Components
import LoadingIndicator, {LoadingSize} from '@components/LoadingIndicator'

// Styles
import IconStyled from '@components/Icon/Icon.styles'
import FlexStyled from '@components/Flex/Flex.styles'
import {
  ButtonLabelStyled,
  ButtonSocialWrapperStyled,
  ButtonWrapperStyled,
} from './Button.styles'

// Themes
import {Colors} from '@themes'

export enum BtnType {
  BOTTOM = 'bottom',
  SOCIAL = 'social',
}

type ButtonProps = {
  type: BtnType
  label: string
  onPress: () => void
  disabled?: boolean
  isLoading?: boolean
  btnProps?: {
    [key: string]: string | number
  }
}

const typeActive = (type: BtnType) =>
  [BtnType.BOTTOM, BtnType.SOCIAL].includes(type)
    ? Colors.palette.lightGray
    : Colors.palette.primary

const Button = ({
  type = BtnType.BOTTOM,
  label,
  onPress,
  disabled,
  isLoading,
  btnProps,
}: ButtonProps) => {
  return (
    <ButtonWrapperStyled
      type={type}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      underlayColor={typeActive(type)}
      {...btnProps}>
      <>
        {isLoading && (
          <LoadingIndicator
            size={LoadingSize.SMALL}
            color={Colors.palette.white}
          />
        )}
        {!isLoading && label && (
          <ButtonLabelStyled disabled={disabled} type={type}>
            {label}
          </ButtonLabelStyled>
        )}
      </>
    </ButtonWrapperStyled>
  )
}

type SocialButtonProps = {
  label: string
  type: BtnType
  disabled?: boolean
  onPress: () => void
  bgColor?: string
  isLoading?: boolean
  icon?: ImageSourcePropType
  btnProps?: {
    [key: string]: string | number
  }
}

const SocialButton = ({
  type = BtnType.SOCIAL,
  label,
  onPress,
  isLoading,
  disabled,
  bgColor,
  icon,
  btnProps,
}: SocialButtonProps) => {
  return (
    <ButtonSocialWrapperStyled
      type={type}
      bgColor={bgColor}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      underlayColor={typeActive(type)}
      {...btnProps}>
      <>
        {isLoading && (
          <LoadingIndicator
            size={LoadingSize.SMALL}
            color={Colors.palette.white}
          />
        )}
        {!isLoading && (
          <FlexStyled.RowCenterHorizontal>
            {icon && (
              <FlexStyled.Custom pRight={s(4)}>
                <IconStyled width={s(16)} height={s(16)} source={icon} />
              </FlexStyled.Custom>
            )}
            {label && (
              <ButtonLabelStyled disabled={disabled} type={type}>
                {label}
              </ButtonLabelStyled>
            )}
          </FlexStyled.RowCenterHorizontal>
        )}
      </>
    </ButtonSocialWrapperStyled>
  )
}

export {Button, SocialButton}
