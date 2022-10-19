import React from 'react'
import {create} from 'react-test-renderer'

import HeadingStyled from '../Heading.styles'

import {HEADING_TYPE} from '@constants/type'

describe('Heading', () => {
  test('should render Default type correctly', () => {
    const component = create(
      <HeadingStyled type={HEADING_TYPE.H1}>Sample h1</HeadingStyled>,
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('should render Default type with custom props', () => {
    const component = create(
      <HeadingStyled type={HEADING_TYPE.H2}>Sample h2</HeadingStyled>,
    )
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
