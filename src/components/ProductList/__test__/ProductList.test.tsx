import React from 'react'

// LIBS
import {render} from '@testing-library/react-native'

// Components
import ProductsList from '@components/ProductList'

// Mocks
import {products} from '@constants/dataMock'

// Constants
import {PRODUCTS_EMPTY_RESULT} from '@constants'

// Utils

describe('Product Card List Component', () => {
  const props = {
    products,
    onPressProductCard: jest.fn(),
    onPressLikeProduct: jest.fn(),
    onLoadMoreProduct: jest.fn(),
  }

  const tree = render(<ProductsList {...props} />)
  test('Should render correctly', () => {
    const component = tree.toJSON()
    expect(component).toMatchSnapshot()
  })

  test('Should render No products found text when products is empty', () => {
    const newProps = {
      ...props,
      products: [],
    }

    const component = render(<ProductsList {...newProps} />)
    const {getByText} = component
    const label = getByText(PRODUCTS_EMPTY_RESULT)
    expect(label).toBeTruthy()
  })
})
