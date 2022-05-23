import React from 'react';
import renderer from 'react-test-renderer';

import Title from 'components/Title';

describe('Title Component', () => {
  test('should render  correctly', () => {
    const tree = renderer.create(<Title titleName='Welcome'></Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
