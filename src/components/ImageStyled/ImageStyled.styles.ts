import styled from 'styled-components/native'

// Services
import {convertToPx} from '@services/format'

interface ImageProps {
  alignSelf?: string
  mTop?: number
  mBottom?: number
  mLeft?: number
  mRight?: number
  pRight?: number
  pLeft?: number
  height: number
  width: number
  resizeMode?: string
  transform?: string
}

const ImageStyled = styled.Image<ImageProps>`
  width: ${props => convertToPx(props.width) || '100%'};
  height: ${props => convertToPx(props.height) || '100%'};
  ${props => props.alignSelf && `align-self: ${props.alignSelf}`};
  ${props => props.mTop && `margin-top: ${props.mTop}px`};
  ${props => props.mBottom && `margin-bottom: ${props.mBottom}px`};
  ${props => props.mLeft && `margin-left: ${props.mLeft}px`};
  ${props => props.mRight && `margin-right: ${props.mRight}px`};
  ${props => props.pRight && `padding-right: ${props.pRight}px`};
  ${props => props.pLeft && `padding-left: ${props.pLeft}px`};
  ${props => props.resizeMode && `resize-mode: ${props.resizeMode}`};
  ${props => props.transform && `transform: ${props.transform}`};
`

interface ImageData {
  Normal: typeof ImageStyled
}

export const Image: ImageData = {
  Normal: ImageStyled,
}
