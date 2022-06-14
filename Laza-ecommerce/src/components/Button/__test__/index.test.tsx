import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// LIBS
import renderer from 'react-test-renderer';

// Components
import Button from 'components/Button';

// Themes
import IMAGES from 'themes/Images';

describe('Button Component', () => {
  const props = {
    onPress: jest.fn(),
    text: 'Button'
  };

  const tree = renderer.create(<Button {...props} />);

  test('should render correctly', () => {
    const component = tree.toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should render children', () => {
    const newProps = {
      ...props,
      children: <Text>i'm Button</Text>
    };
    const tree = renderer.create(<Button {...newProps} />);
    const component = tree.toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should render icon button correctly', () => {
    const newProps = {
      ...props,
      icon: IMAGES.iconGoogle
    };

    const tree = renderer.create(<Button {...newProps} />);
    const component = tree.toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should call function onPress', () => {
    const Pressable = tree.root.findAllByType(TouchableOpacity)[0];
    Pressable.props.onPress();
    expect(props.onPress).toHaveBeenCalled();
  });
});
