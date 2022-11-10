import React from 'react'

// LIBS
import renderer from 'react-test-renderer'

// Components
import Description from '@screens/ProductDetail/components/Description'

// Constants
import {product} from '@constants'

const props = {
  description: product.description,
}

describe('Product detail Description', () => {
  const tree = renderer.create(<Description {...props} />)

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot()
  })
})
