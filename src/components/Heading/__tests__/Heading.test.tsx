import React from 'react'

// Libs
import {render} from '@testing-library/react-native'

// Styles
import HeadingStyled from '../Heading.styles'

// Constants
import {HEADING_TYPE} from '@constants'

describe('Heading', () => {
  test('should render Default type correctly', () => {
    const component = render(
      <HeadingStyled type={HEADING_TYPE.H1}>Sample h1</HeadingStyled>,
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('should render Default type with custom props', () => {
    const component = render(
      <HeadingStyled type={HEADING_TYPE.H2}>Sample h2</HeadingStyled>,
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
