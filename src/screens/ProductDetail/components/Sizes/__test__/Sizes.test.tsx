import React from 'react'

// LIBS
import renderer from 'react-test-renderer'

// Components
import Sizes from '@screens/ProductDetail/components/Sizes'

// Constants
import {product} from '@constants'

const props = {
  sizes: product.sizes,
}

describe('Product detail Sizes', () => {
  const tree = renderer.create(<Sizes {...props} />)

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot()
  })
})
