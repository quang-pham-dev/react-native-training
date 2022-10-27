import React from 'react'

// LIBS
import {render} from '@testing-library/react-native'

// Components
import ProductCard from '@components/ProductCard'

// Mocks
import {product} from '@constants/dataMock'

describe('Product Card Component', () => {
  const props = {
    product,
    onPressProductCard: jest.fn(),
    onPressLikeProduct: jest.fn(),
  }

  const tree = render(<ProductCard {...props} />)
  test('Should render correctly', () => {
    const component = tree.toJSON()
    expect(component).toMatchSnapshot()
  })
})
