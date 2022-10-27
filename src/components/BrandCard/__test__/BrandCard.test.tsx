import React from 'react'

// LIBS
import {render} from '@testing-library/react-native'

// Components
import BrandCard from '@components/BrandCard'

// Mocks
import {brand} from '@constants/dataMock'

describe('Brand Card Component', () => {
  const props = {
    brand: brand,
    onPressBrandCard: jest.fn(),
  }

  const tree = render(<BrandCard {...props} />)
  test('Should render correctly', () => {
    const component = tree.toJSON()
    expect(component).toMatchSnapshot()
  })
})
