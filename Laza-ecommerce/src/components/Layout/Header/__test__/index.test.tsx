import React from 'react';

// LIBS
import renderer from 'react-test-renderer';

// Components
import Header from 'components/Layout/Header';
import Button from 'components/Button';

describe('Header Component', () => {
  const props = {
    navigation: {
      navigate: jest.fn(),
      toggleDrawer: jest.fn(),
      dispatch: jest.fn()
    },
    handlePressCart: jest.fn()
  };

  const tree = renderer.create(<Header {...props} />);

  test('should render correctly', () => {
    const component = tree.toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should call function handleToggleMenu', () => {
    const Pressabled = tree.root.findAllByType(Button)[0];
    Pressabled.props.onPress();
    expect(props.navigation.dispatch).toHaveBeenCalled();
  });
});
