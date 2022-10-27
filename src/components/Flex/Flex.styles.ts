// libs
import styled from 'styled-components/native'

// types
import {SpacingProps} from '@prop-types'

// utils
import {isExits} from '@services/helpers'
interface FlexProps {
  flex?: number
  bgColor?: string
  width?: string
}

const Default = styled.View<FlexProps>`
  ${props => props.flex && `flex: ${props.flex}`};
  ${props => props.bgColor && `background-color: ${props.bgColor};`};
  ${props => props.width && `width: ${props.width};`};
`

const Custom = styled(Default)<SpacingProps>`
  ${props =>
    isExits(props.mVertical) && `margin-vertical: ${props.mVertical}px;`}
  ${props =>
    isExits(props.mHorizontal) && `margin-horizontal: ${props.mHorizontal}px;`}

  ${props =>
    isExits(props.pVertical) && `padding-vertical: ${props.pVertical}px;`}
  ${props =>
    isExits(props.pHorizontal) && `padding-horizontal: ${props.pHorizontal}px;`}

  ${props => isExits(props.pTop) && `padding-top: ${props.pTop}px;`}
  ${props => isExits(props.pLeft) && `padding-left: ${props.pLeft}px;`}
  ${props => isExits(props.pRight) && `padding-right: ${props.pRight}px;`}
  ${props => isExits(props.pBottom) && `padding-bottom: ${props.pBottom}px;`}

  ${props => isExits(props.mTop) && `margin-top: ${props.mTop}px;`}
  ${props => isExits(props.mLeft) && `margin-left: ${props.mLeft}px;`}
  ${props => isExits(props.mRight) && `margin-right: ${props.mRight}px;`}
  ${props => isExits(props.mBottom) && `margin-bottom: ${props.mBottom}px;`}
`

const Start = styled(Custom)`
  justify-content: flex-start;
  flex-direction: row;
`

const Center = styled(Custom)`
  align-items: center;
  justify-content: center;
`

const Between = styled(Custom)`
  align-items: center;
  justify-content: space-between;
`

const BetweenVertical = styled(Custom)`
  justify-content: space-between;
`

const RowCenter = styled(Center)`
  flex-direction: row;
`

const CenterHorizontal = styled(Custom)`
  align-items: center;
`

const CenterVertical = styled(Custom)`
  flex-direction: row;
  justify-content: center;
`

const Row = styled(Custom)`
  flex-direction: row;
`

const RowCenterHorizontal = styled(Row)`
  align-items: center;
`

const Wrap = styled(Row)`
  flex-wrap: wrap;
`

const FlexEnd = styled(Custom)`
  justify-content: flex-end;
  ${props => props.alignItems && `align-items: ${props.alignItems};`}
`

const ItemsStart = styled(Custom)`
  align-items: flex-start;
`

const ItemsEnd = styled(Custom)`
  align-items: flex-end;
`

const FlexSpaceAround = styled(Row)`
  justify-content: space-around;
`

const FlexSpaceBetween = styled(Row)`
  justify-content: space-between;
`

const RowEnd = styled(Row)`
  align-items: flex-end;
`

const FlexSpaceBetweenCenter = styled(Row)`
  align-items: center;
  justify-content: space-between;
`

interface IFlex {
  Default: typeof Default
  Start: typeof Start
  Custom: typeof Custom
  Center: typeof Center
  RowCenter: typeof RowCenter
  CenterHorizontal: typeof CenterHorizontal
  CenterVertical: typeof CenterVertical
  Row: typeof Row
  RowEnd: typeof RowEnd
  RowCenterHorizontal: typeof RowCenterHorizontal
  Wrap: typeof Wrap
  Between: typeof Between
  FlexEnd: typeof FlexEnd
  ItemsStart: typeof ItemsStart
  ItemsEnd: typeof ItemsEnd
  FlexSpaceAround: typeof FlexSpaceAround
  FlexSpaceBetween: typeof FlexSpaceBetween
  FlexSpaceBetweenCenter: typeof FlexSpaceBetweenCenter
  BetweenVertical: typeof BetweenVertical
}

const FlexStyled: IFlex = {
  Default,
  Custom,
  Center,
  RowCenter,
  CenterVertical,
  CenterHorizontal,
  Row,
  RowEnd,
  RowCenterHorizontal,
  Wrap,
  Between,
  FlexEnd,
  ItemsStart,
  ItemsEnd,
  Start,
  FlexSpaceAround,
  FlexSpaceBetween,
  FlexSpaceBetweenCenter,
  BetweenVertical,
}

export default FlexStyled
