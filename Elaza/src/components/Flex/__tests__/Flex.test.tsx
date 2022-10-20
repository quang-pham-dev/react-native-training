import React from 'react'
import {create} from 'react-test-renderer'

import FlexStyled from '../Flex.styles'

describe('Flex', () => {
  test('should render Default correctly', () => {
    const component = create(<FlexStyled.Default />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render Center correctly', () => {
    const component = create(<FlexStyled.Center />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render CenterHorizontal correctly', () => {
    const component = create(<FlexStyled.CenterHorizontal />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render CenterVertical correctly', () => {
    const component = create(<FlexStyled.CenterVertical />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render Row correctly', () => {
    const component = create(<FlexStyled.Row />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render RowCenter correctly', () => {
    const component = create(<FlexStyled.RowCenter />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render RowCenterHorizontal correctly', () => {
    const component = create(<FlexStyled.RowCenterHorizontal />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render Wrap correctly', () => {
    const component = create(<FlexStyled.Wrap />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render FlexEnd correctly', () => {
    const component = create(<FlexStyled.FlexEnd />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render ItemsStart correctly', () => {
    const component = create(<FlexStyled.ItemsStart />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should render ItemsEnd correctly', () => {
    const component = create(<FlexStyled.ItemsEnd />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
