import styled from 'styled-components/native'

// Themes
import {Colors, Metrics} from '@themes'

export const BrandCardWrapperStyled = styled.TouchableOpacity`
  justify-content: center;
  margin-right: ${Metrics.margin.small}px;
  background-color: ${Colors.palette.lightGray};
  border-radius: ${Metrics.borderRadius.base}px;
  padding-right: ${Metrics.padding.medium}px;
`
export const ImageWrapperStyled = styled.View`
  padding: ${Metrics.padding.xs}px;
  margin-left: ${Metrics.margin.tiny}px;
  margin-right: ${Metrics.margin.small}px;
  margin-vertical: ${Metrics.margin.tiny}px;
  border-radius: ${Metrics.borderRadius.base}px;
  background-color: ${Colors.background};
`
