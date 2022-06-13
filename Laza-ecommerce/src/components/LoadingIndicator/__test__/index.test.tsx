import React from 'react';

// LIBS
import renderer from 'react-test-renderer';

// Components
import LoadingIndicator from 'components/LoadingIndicator';

// Themes
import Colors from 'themes/Colors';
import { ILoadingIndicatorProps } from 'types/components/LoadingIndicator';

describe('LoadingIndicator Component', () => {
  const props = {
    size: 'large' as ILoadingIndicatorProps['size']
  };
  const tree = renderer.create(<LoadingIndicator {...props} />);

  test('should render correctly', () => {
    const component = tree.toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should render new small size props correctly', () => {
    const newProps = {
      color: Colors.secondaryColor,
      size: 'small' as ILoadingIndicatorProps['size']
    };

    const tree = renderer.create(<LoadingIndicator {...newProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('should render new color props correctly', () => {
    const newProps = {
      ...props,
      color: Colors.secondaryColor
    };

    const tree = renderer.create(<LoadingIndicator {...newProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
