import React from 'react';
import renderer from 'react-test-renderer';
import Label from 'components/Label';

describe('Label Component', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<Label labelName='XXL' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
