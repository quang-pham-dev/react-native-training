import styled from 'styled-components/native'

// Libs
import {s} from 'react-native-size-matters/extend'

// Themes
import {Colors, Metrics} from '@themes'

export const BrandCardWrapperStyled = styled.TouchableOpacity`
  height: ${s(50)}px;
  margin-right: ${Metrics.margin.small}px;
  background-color: ${Colors.palette.lightGray};
  border-radius: ${Metrics.borderRadius.base}px;
  padding-right: ${Metrics.padding.medium}px;
`
export const ImageWrapperStyled = styled.View`
  height: ${s(40)}px;
  width: ${s(40)}px;
  justify-content: center;
  align-items: center;
  padding-vertical: ${Metrics.padding.xs}px;
  padding-horizontal: ${Metrics.padding.xs}px;
  margin-left: ${Metrics.margin.tiny}px;
  margin-right: ${Metrics.margin.small}px;
  margin-vertical: ${Metrics.margin.tiny}px;
  border-radius: ${Metrics.borderRadius.base}px;
  background-color: ${Colors.background};
`
