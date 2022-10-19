import React from 'react'
import styled from 'styled-components/native'

// Services
import {getType, convertToPx} from '@services/format'
import {Fonts} from '@themes'

type HeadingProps = {
  type: string
  textAlign?: string
  children: React.ReactNode
  color?: string
  lineHeight?: number
  fontFamily?: number
  mBottom?: number
  pHorizontal?: number
  mVertical?: number
  mRight?: number
}

const element = 'heading'

const HeadingStyled = styled.Text<HeadingProps>`
  text-align: ${props => props.textAlign || 'center'};
  font-family: ${Fonts.type.interRegular};
  ${props => {
    const {color, lineHeight, type} = props
    const renderedColor = `${color ? `color: ${color};` : ''}`
    const renderedLineHeight = `${
      lineHeight ? `line-height: ${lineHeight}px;` : ''
    }`
    const elementType = getType(type, element)

    if (elementType) {
      const {
        color: elementColor,
        fontSize: elementFontSize,
        lineHeight: elementLineHeight,
      } = elementType

      return `
        ${renderedColor || (elementColor ? `color: ${elementColor};` : '')}
        ${
          renderedLineHeight ||
          (elementLineHeight
            ? `line-height: ${convertToPx(elementLineHeight)};`
            : '')
        }
        ${elementFontSize ? `font-size: ${convertToPx(elementFontSize)};` : ''}
      `
    }

    return `
      ${renderedColor}
      ${renderedLineHeight}
    `
  }}
  ${props => props.fontFamily && `font-family: ${props.fontFamily};`}
  ${props => props.mBottom && `margin-bottom: ${convertToPx(props.mBottom)};`}
  ${props => props.mRight && `margin-right: ${convertToPx(props.mRight)};`}
  ${props =>
    props.pHorizontal &&
    `padding-horizontal: ${convertToPx(props.pHorizontal)};`}
  ${props =>
    props.mVertical && `margin-vertical: ${convertToPx(props.mVertical)};`}
`

export default HeadingStyled
