import React from 'react';
import renderer from 'react-test-renderer';
import Input from 'components/TextInput';

describe('TextInput Component', () => {
  const onChangeText = jest.fn();
  const component = renderer.create(<Input value={''} onChangeText={onChangeText} />);
  test('should render correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
