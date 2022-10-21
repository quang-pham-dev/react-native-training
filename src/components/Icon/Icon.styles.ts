// Libs
import styled from 'styled-components/native'

// Utils
import {getType, convertToPx} from '@services/format'

interface IconProps {
  type: string
  transform?: string
}

const metricsType = 'icon'

const IconStyled = styled.Image<IconProps>`
  ${props =>
    getType(props.type, metricsType) &&
    `width: ${convertToPx(getType(props.type, metricsType).width)};`}
  ${props =>
    getType(props.type, metricsType) &&
    `height: ${convertToPx(getType(props.type, metricsType).height)};`}
  ${props => props.transform && `transform: ${props.transform}`}
`

export default IconStyled
