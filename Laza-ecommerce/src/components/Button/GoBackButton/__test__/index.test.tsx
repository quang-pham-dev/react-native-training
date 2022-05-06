import React from 'react';
import GoBackButton from 'components/Button/GoBackButton';
import renderer from 'react-test-renderer';
import { IMAGES } from 'styles/themes';

describe('Social Button Component', () => {
  test('should render  correctly', () => {
    const tree = renderer
      .create(<GoBackButton icon={IMAGES.iconBack} onPress={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
