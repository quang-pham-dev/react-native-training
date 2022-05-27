import React from 'react';
import { TextInput } from 'react-native';

// LIBS
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

// Components
import SearchBar from 'components/SearchBar';

describe('Search Bar Component', () => {
  const props = {
    value: '',
    onChangeText: jest.fn(),
    onSubmitEditing: jest.fn(),
  };
  const tree = renderer.create(<SearchBar {...props} />);
  test('Should render correctly', () => {
    const component = tree.toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should call function onChangeText', () => {
    const component = tree.root.findAllByType(TextInput)[0];
    component.props.onChangeText();
    expect(props.onChangeText).toHaveBeenCalled();
  });
});
