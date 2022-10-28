import React from 'react'

// LIBS
import {render} from '@testing-library/react-native'

// Components
import LoginForm from '@screens/Login/components/LoginForm'

// constants

import {LoginCredentials} from '@model-types'

// Types

const mockLogin = jest.fn((data: LoginCredentials) => {
  return Promise.resolve({data})
})

describe('Login Form', () => {
  let tree: any
  beforeEach(() => {
    tree = render(<LoginForm onSubmit={mockLogin} />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot()
  })
})
