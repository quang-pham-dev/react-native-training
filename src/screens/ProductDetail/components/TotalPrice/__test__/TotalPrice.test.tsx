import React from 'react'

// LIBS
import renderer from 'react-test-renderer'

// Components
import ProductSize from '@screens/ProductDetail/components/Sizes'

// Constants
import {product} from '@constants'

const props = {
  sizes: product.sizes,
}

describe('Product detail TotalPrice', () => {
  const tree = renderer.create(<ProductSize {...props} />)

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot()
  })
})
