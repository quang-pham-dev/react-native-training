import React from 'react'

// LIBS
import renderer from 'react-test-renderer'

// Components
import ImagesPreview from '@screens/ProductDetail/components/ImagesPreview'

// Mock data
import {product} from '@constants'

const props = {
  imagesPreview: product.imagesPreview,
}

describe('Product detail Images review', () => {
  const tree = renderer.create(<ImagesPreview {...props} />)

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot()
  })
})
