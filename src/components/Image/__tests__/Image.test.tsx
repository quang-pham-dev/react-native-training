import React from 'react'

// Libs
import {render} from '@testing-library/react-native'

// Styled
import {Image} from '../Image.styles'

// Themes
import {Images} from '@themes'

const props = {
  source: Images.splash,
  height: 300,
}

describe('Image', () => {
  const normalImage = render(<Image.Normal {...props} />)
  test('should render normal image correctly', () => {
    const tree = normalImage.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
