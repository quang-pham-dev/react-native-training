import React from 'react';
import { Pressable } from 'react-native';

// LIBS
import { fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

// Screen
import DrawerItem from 'screens/SideMenu/components/index';

describe('Side menu', () => {
  let tree: any;
  const closeMenuID = 'Side-menu-close';

  const props = {
    title: 'title',
    onPress: jest.fn()
  };
  tree = renderer.create(<DrawerItem {...props} source={0} />);

  test('should render correctly', () => {
    const component = tree.toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should call function handlePressMenuItem', async () => {
    const button = tree.root.findAllByType(Pressable)[0];

    await fireEvent.press(button);

    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});
