import React from 'react'

// LIBS
import renderer from 'react-test-renderer'

// Components
import Reviews from '../index'

// Mock data
import {product} from '@constants'

const props = {
  comment: product.comment,
  rating: product.rating,
  reviewers: product.reviewers,
}
describe('Product detail reviewers', () => {
  const tree = renderer.create(<Reviews {...props} />)

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot()
  })
})
