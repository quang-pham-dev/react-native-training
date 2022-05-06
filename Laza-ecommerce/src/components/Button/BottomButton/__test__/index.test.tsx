import React from 'react';
import BottomButton from 'components/Button/BottomButton';
import renderer from 'react-test-renderer';

describe('Bottom Button Component', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(<BottomButton title='Create an Account' onPress={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render disabled button correctly', () => {
    const tree = renderer
      .create(<BottomButton title='Google' disabled onPress={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
