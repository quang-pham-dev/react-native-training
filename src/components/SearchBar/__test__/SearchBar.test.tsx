import React from 'react'

// LIBS
import {render} from '@testing-library/react-native'

// Components
import SearchBar from '@components/SearchBar'

describe('Search Bar Component', () => {
  const props = {
    value: 'search value',
    onSubmitEditing: jest.fn(),
  }
  const tree = render(<SearchBar {...props} />)
  test('Should render correctly', () => {
    const component = tree.toJSON()
    expect(component).toMatchSnapshot()
  })
})
