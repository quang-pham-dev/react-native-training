import React from 'react';
import SocialButton from 'components/Button/SocialButton';
import renderer from 'react-test-renderer';
import { IMAGES } from 'styles/themes';

describe('Social Button Component', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<SocialButton title='Facebook' onPress={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render icon button correctly', () => {
    const tree = renderer
      .create(<SocialButton title='Google' icon={IMAGES.iconGoogle} onPress={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
