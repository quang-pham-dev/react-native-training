import React from 'react'

// Libs
import {render} from '@testing-library/react-native'

// Styles
import LayoutStyled from '../Layout.styles'
import HeadingStyled from '@components/Heading/Heading.styles'

// Constants
import {HEADING_TYPE} from '@constants'

describe('Layout', () => {
  test('should render Main correctly correctly', () => {
    const component = render(
      <LayoutStyled.Main>
        <HeadingStyled type={HEADING_TYPE.H1}>
          Lorem ipsum dolor sit a
        </HeadingStyled>
      </LayoutStyled.Main>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render Base correctly correctly', () => {
    const component = render(
      <LayoutStyled.Base>
        <HeadingStyled type={HEADING_TYPE.H1}>
          Lorem ipsum dolor sit a
        </HeadingStyled>
      </LayoutStyled.Base>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render PaddingBottom35 correctly correctly', () => {
    const component = render(
      <LayoutStyled.PaddingBottom35>
        <HeadingStyled type={HEADING_TYPE.H1}>
          Lorem ipsum dolor sit a
        </HeadingStyled>
      </LayoutStyled.PaddingBottom35>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render PaddingBottom38 correctly correctly', () => {
    const component = render(
      <LayoutStyled.PaddingBottom38>
        <HeadingStyled type={HEADING_TYPE.H1}>
          Lorem ipsum dolor sit a
        </HeadingStyled>
      </LayoutStyled.PaddingBottom38>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
