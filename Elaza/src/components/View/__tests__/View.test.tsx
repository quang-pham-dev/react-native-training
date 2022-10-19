import React from 'react'
import {create} from 'react-test-renderer'
import HeadingStyled from '@components/Heading/Heading.styles'
import {HEADING_TYPE} from '@constants/type'

import ViewStyled from '../View.styles'

describe('ViewStyled', () => {
  test('should render default correctly', () => {
    const component = create(<ViewStyled.Default />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render ViewBorder10 correctly', () => {
    const component = create(
      <ViewStyled.Border10 bgColor="yellow" w={200} h={30} />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render ViewBorder20 correctly', () => {
    const component = create(<ViewStyled.BorderRadius20 bgColor="red" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render Divider correctly correctly', () => {
    const component = create(<ViewStyled.Divider />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render Absolute correctly correctly', () => {
    const component = create(
      <ViewStyled.Absolute>
        <HeadingStyled type={HEADING_TYPE.H1}>
          Lorem ipsum dolor sit a
        </HeadingStyled>
      </ViewStyled.Absolute>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
