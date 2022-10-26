import styled from 'styled-components/native'

// Services
import {getType, convertToPx} from '@services/format'

// Themes
import {Colors, Metrics} from '@themes'

type ButtonProps = {
  type: string
  bgColor?: string
  alignItems?: string
  justifyContent?: string
  disabled?: boolean
  children: React.ReactNode
  pTop?: number
}

const element = 'button'

export const ButtonWrapperStyled = styled.TouchableHighlight<ButtonProps>`
  align-items: ${props => props.alignItems || 'center'};
  padding-top: ${props => props.pTop || Metrics.padding.mediumPlus}px
    ${props => {
      const type = getType(props.type, element)

      if (type) {
        const {
          width,
          height,
          borderRadius,
          bgColor,
          borderColor,
          disableBgColor,
          disableBorderColor,
        } = type
        return `
        ${width ? `width: ${convertToPx(width)};` : ''}
        ${height ? `height: ${convertToPx(height)};` : ''}
        ${borderRadius ? `border-radius: ${convertToPx(borderRadius)};` : ''}
        ${
          bgColor
            ? `background-color: ${props.bgColor ? disableBgColor : bgColor};`
            : ''
        }
        ${
          borderColor
            ? `border: 1px solid ${
                props.disabled ? disableBorderColor : borderColor
              };`
            : ''
        }
      `
      }
    }};
`

export const ButtonLabelStyled = styled.Text<ButtonProps>`
  ${props => {
    const type = getType(props.type, element)

    if (type) {
      const {fontSize, fontFamily, color, disableColor} = type
      return `
        ${fontSize ? `font-size: ${convertToPx(fontSize)};` : ''}
        ${fontFamily ? `font-family: ${fontFamily};` : ''}
        ${color ? `color: ${props.disabled ? disableColor : color};` : ''}
      `
    }
  }};
`

export const ButtonSocialWrapperStyled = styled.TouchableHighlight<ButtonProps>`
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
  background-color: ${props => props.bgColor || Colors.palette.transparent};
  ${props => {
    const type = getType(props.type, element)

    if (type) {
      const {
        width,
        height,
        borderRadius,
        bgColor,
        borderColor,
        disableBgColor,
        disableBorderColor,
      } = type
      return `
        ${width ? `width: ${convertToPx(width)};` : ''}
        ${height ? `height: ${convertToPx(height)};` : ''}
        ${borderRadius ? `border-radius: ${convertToPx(borderRadius)};` : ''}
        ${
          bgColor
            ? `background-color: ${props.bgColor ? disableBgColor : bgColor};`
            : ''
        }
        ${
          borderColor
            ? `border: 1px solid ${
                props.disabled ? disableBorderColor : borderColor
              };`
            : ''
        }
        `
    }
  }};
`
