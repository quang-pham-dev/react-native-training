import React from 'react'

// LIBS
import {render} from '@testing-library/react-native'

// Components
import BrandList from '@components/BrandList'

// Mocks
import {brands} from '@constants'

// Constants
import {BRANDS_EMPTY_RESULT} from '@constants'

describe('Brand List Component', () => {
  const props = {
    onPressBrandCard: jest.fn(),
    brands: brands,
  }

  const tree = render(<BrandList {...props} />)
  test('Should render correctly', () => {
    const component = tree.toJSON()
    expect(component).toMatchSnapshot()
  })

  test('Should render No Brand found text when brand list is empty', () => {
    const newProps = {
      ...props,
      brands: [],
    }
    const component = render(<BrandList {...newProps} />)
    const {getByText} = component
    const textContent = getByText(BRANDS_EMPTY_RESULT)
    expect(textContent).toBeTruthy()
  })
})
