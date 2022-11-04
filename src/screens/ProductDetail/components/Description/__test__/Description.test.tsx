import {product} from '@constants'
import React from 'react'

// LIBS
import renderer from 'react-test-renderer'

// Components
import Description from '@screens/ProductDetail/components/Description'

// Mock data

const props = {
  description: product.description,
}

describe('Product detail Description', () => {
  const tree = renderer.create(<Description {...props} />)

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot()
  })
})
