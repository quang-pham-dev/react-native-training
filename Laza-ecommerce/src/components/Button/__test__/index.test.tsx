import React from 'react';
import renderer from 'react-test-renderer';
import { IMAGES } from 'styles/themes';
import Button from 'components/Button';

describe('Button Component', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<Button text='Facebook' onPress={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render icon button correctly', () => {
    const tree = renderer
      .create(<Button text='Google' icon={IMAGES.iconGoogle} onPress={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
