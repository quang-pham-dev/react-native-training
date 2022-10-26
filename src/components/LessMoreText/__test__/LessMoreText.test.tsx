import React from 'react'

// LIBS
import {render} from '@testing-library/react-native'

// Components
import MoreLessText from '@components/LessMoreText'

describe('Read more Component', () => {
  const props = {
    numberOfLines: 2,
    styleShowMoreText: {color: 'red'},
  }

  test('should render correctly', () => {
    const tree = render(<MoreLessText {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render correctly with children', () => {
    const tree = render(<MoreLessText {...props}>Hello</MoreLessText>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
