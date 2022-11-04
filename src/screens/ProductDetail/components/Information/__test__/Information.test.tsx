import React from 'react'

// LIBS
import renderer from 'react-test-renderer'

// Components
import Information from '@screens/ProductDetail/components/Information'

// Mock data
import {product} from '@constants'

describe('Product detail information', () => {
  const props: any = {
    title: product.name,
    type: product.type,
    price: product.price,
  }

  const tree = renderer.create(<Information {...props} />)

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot()
  })
})
