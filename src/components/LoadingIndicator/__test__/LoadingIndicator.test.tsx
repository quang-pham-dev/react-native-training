import React from 'react'

// Libs
import {render} from '@testing-library/react-native'

// Components
import LoadingIndicator, {LoadingSize} from '@components/LoadingIndicator'

// Themes
import {Colors} from '@themes'

describe('LoadingIndicator Component', () => {
  const tree = render(<LoadingIndicator />)
  const props = {
    color: Colors.background,
  }
  test('should render correctly', () => {
    const component = tree.toJSON()
    expect(component).toMatchSnapshot()
  })

  test('should render new small size props correctly', () => {
    const newProps = {
      ...props,
      size: LoadingSize.SMALL,
    }

    const newInstanceSmall = render(<LoadingIndicator {...newProps} />).toJSON()
    expect(newInstanceSmall).toMatchSnapshot()
  })
  test('should render new color props correctly', () => {
    const newProps = {
      ...props,
      size: LoadingSize.LARGE,
    }

    const newInstanceLarge = render(<LoadingIndicator {...newProps} />).toJSON()
    expect(newInstanceLarge).toMatchSnapshot()
  })
})
