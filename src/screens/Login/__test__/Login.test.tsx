import React from 'react'

// Libs
import {render} from '@testing-library/react-native'

// Screen
import Login from '../index'

jest.useFakeTimers()

const props: any = {
  navigation: {
    navigate: jest.fn(),
    setOptions: jest.fn(),
  },
}

describe('Login Screen', () => {
  test('Should render correctly', async () => {
    const component = render(<Login {...props} />)

    component.toJSON()

    expect(component).toMatchSnapshot()
  })
})
