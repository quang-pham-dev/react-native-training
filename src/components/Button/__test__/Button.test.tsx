import React from 'react'

// Libs
import {fireEvent, render} from '@testing-library/react-native'

// Components
import {Button, SocialButton, BtnType} from '@components/Button'

const props = {
  onPress: jest.fn(),
  type: BtnType.BOTTOM,
  label: 'Title Button',
  disabled: false,
  isLoading: false,
}

const customProps = {
  disabled: true,
  isLoading: true,
  onPress: jest.fn(),
  label: 'Btn',
  type: BtnType.SOCIAL,
}

describe('Button', () => {
  test('Should render correctly', () => {
    const component = render(<Button {...props} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Should call function onPress', () => {
    const {getByText} = render(<Button {...props} />)
    const button = getByText('Title Button')
    fireEvent.press(button)
    expect(props.onPress).toHaveBeenCalled()
  })

  test('Should render with custom props', () => {
    const element = render(<Button {...customProps} />)
    const tree = element.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
describe('SocialButton', () => {
  test('Should render correctly', () => {
    const component = render(<SocialButton {...props} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Should call function onPress', () => {
    const {getByText} = render(<SocialButton {...props} />)
    const button = getByText('Title Button')
    fireEvent.press(button)
    expect(props.onPress).toHaveBeenCalled()
  })

  test('Should render with custom props', () => {
    const element = render(<SocialButton {...customProps} />)
    const tree = element.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
