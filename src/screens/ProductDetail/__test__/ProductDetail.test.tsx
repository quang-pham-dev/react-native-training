import React from 'react'

// LIBS
import {render} from '@testing-library/react-native'

// Screens
import {ProductDetail} from '@screens'

const props: any = {
  navigation: {
    navigate: jest.fn(),
    setOptions: jest.fn(),
  },
}

describe('Product detail Screen', () => {
  test('should render correctly', () => {
    const tree = render(<ProductDetail {...props} />)
    expect(tree).toMatchSnapshot()
  })
})
