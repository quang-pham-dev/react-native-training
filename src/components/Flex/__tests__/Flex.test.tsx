import React from 'react'
import {render} from '@testing-library/react-native'

import FlexStyled from '../Flex.styles'

describe('Flex', () => {
  test('should render Default correctly', () => {
    const component = render(<FlexStyled.Default />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render Center correctly', () => {
    const component = render(<FlexStyled.Center />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render CenterHorizontal correctly', () => {
    const component = render(<FlexStyled.CenterHorizontal />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render CenterVertical correctly', () => {
    const component = render(<FlexStyled.CenterVertical />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render Row correctly', () => {
    const component = render(<FlexStyled.Row />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render RowCenter correctly', () => {
    const component = render(<FlexStyled.RowCenter />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render RowCenterHorizontal correctly', () => {
    const component = render(<FlexStyled.RowCenterHorizontal />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render Wrap correctly', () => {
    const component = render(<FlexStyled.Wrap />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render FlexEnd correctly', () => {
    const component = render(<FlexStyled.FlexEnd />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render ItemsStart correctly', () => {
    const component = render(<FlexStyled.ItemsStart />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render ItemsEnd correctly', () => {
    const component = render(<FlexStyled.ItemsEnd />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
