import React from 'react'

// LIBS
import {cleanup, render} from '@testing-library/react-native'

// Screens
import {BrandDetail} from '@screens'

describe('Brand detail Screen', () => {
  const props: any = {
    navigation: {
      navigate: jest.fn(),
      setOptions: jest.fn(),
    },
  }

  afterEach(() => {
    jest.resetAllMocks()
    cleanup()
  })

  describe('Brand detail Screen', () => {
    test('Should render correctly', async () => {
      const component = render(<BrandDetail {...props} />)

      component.toJSON()

      expect(component).toMatchSnapshot()
    })
  })
})
