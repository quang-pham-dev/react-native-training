import React from 'react'

// LIBS
import {render} from '@testing-library/react-native'

// Components
import Switch from '@components/Switch'

describe('Switch Component', () => {
  const props = {
    value: true,
    disabled: false,
  }

  const tree = render(<Switch {...props} />)
  test('Should render correctly', () => {
    const component = tree.toJSON()
    expect(component).toMatchSnapshot()
  })
  test('Should render correctly with custom props', () => {
    const newProps = {
      ...props,
      disabled: true,
    }

    const component = render(<Switch {...newProps} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
