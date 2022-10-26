import React from 'react'
import {render} from '@testing-library/react-native'

import {AnimatedKeyboardWrapperStyled} from '../AnimatedKeyboard.styles'
import {TextInput} from 'react-native'

describe('AnimatedKeyboard', () => {
  test('Should render correctly', () => {
    const component = render(
      <AnimatedKeyboardWrapperStyled>
        <TextInput placeholder="Enter your Username" />
      </AnimatedKeyboardWrapperStyled>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
