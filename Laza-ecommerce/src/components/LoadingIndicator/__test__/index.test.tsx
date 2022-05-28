import React from 'react';

// LIBS
import renderer from 'react-test-renderer';

// Components
import LoadingIndicator from 'components/LoadingIndicator';

// Types
import { LOADING_SIZE } from 'types/components/LoadingIndicator';

// Themes
import Colors from 'themes/Colors';

describe('LoadingIndicator Component', () => {
  const props = {
    size: LOADING_SIZE.LARGE,
  };
  const tree = renderer.create(<LoadingIndicator {...props} />);

  test('should render correctly', () => {
    const component = tree.toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should render new color props correctly', () => {
    const newProps = {
      ...props,
      color: Colors.secondaryColor,
    };

    const tree = renderer.create(<LoadingIndicator {...newProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
