import React from 'react'
import {render} from '@testing-library/react-native'

import IconStyled from '../Icon.styles'
import {Icons} from '@themes/Images'

const props = {
  type: 'tiny',
  source: Icons.back,
}

describe('Icon', () => {
  test('should render tiny icon correctly', () => {
    const component = render(<IconStyled {...props} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('should render small icon correctly', () => {
    const customProps = {...props, type: 'small'}
    const component = render(<IconStyled {...customProps} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('should render medium icon correctly', () => {
    const customProps = {...props, type: 'medium'}
    const component = render(<IconStyled {...customProps} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('should render large icon correctly', () => {
    const customProps = {...props, type: 'large'}
    const component = render(<IconStyled {...customProps} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
