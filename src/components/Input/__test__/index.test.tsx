import React from 'react'

// LIBS
import {render} from '@testing-library/react-native'

// Components
import Input from '@components/Input'

describe('TextInput Component', () => {
  const props = {
    value: 'user name',
    labelStyle: {},
    placeholder: 'Enter your user name',
    textInputStyles: {},
    secureTextEntry: false,
    autoFocus: false,
    onChange: jest.fn(),
    onSubmitEditing: jest.fn(),
    onBlur: jest.fn(),
  }

  const tree = render(<Input {...props} />)
  test('should render correctly', () => {
    const component = tree.toJSON()
    expect(component).toMatchSnapshot()
  })

  test('should render with label correctly', () => {
    const newProps = {
      ...props,
      label: 'Username',
    }
    const component = render(<Input {...newProps} />).toJSON()
    expect(component).toMatchSnapshot()
  })
  test('should render placeholder', () => {
    const newProps = {
      ...props,
      placeholder: 'Enter your username',
    }
    const component = render(<Input {...newProps} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
