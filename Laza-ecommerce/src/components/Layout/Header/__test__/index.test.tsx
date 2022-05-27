import React from 'react';
import { Pressable } from 'react-native';

// LIBS
import renderer from 'react-test-renderer';

// Components
import Header from 'components/Layout/Header';

// Utils
import { navigationMock } from 'utils/testMock';

describe('Header Component', () => {
  const props = {
    navigation: {
      navigate: jest.fn(),
      toggleDrawer: jest.fn(),
      dispatch: jest.fn(),
    },
  };

  const tree = renderer.create(<Header {...props} />);

  test('should render correctly', () => {
    const component = tree.toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should call function handleToggleMenu', () => {
    const Pressabled = tree.root.findAllByType(Pressable)[0];
    Pressabled.props.onPress();
    expect(props.navigation.dispatch).toHaveBeenCalled();
  });
});
