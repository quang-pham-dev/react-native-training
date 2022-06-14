import React from 'react';
import { TextInput } from 'react-native';

// LIBS
import { waitFor } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

// Components
import SearchBar from 'components/SearchBar';

describe('Search Bar Component', () => {
  const props = {
    value: 'search value',
    onSubmitEditing: jest.fn()
  };
  const tree = renderer.create(<SearchBar {...props} />);
  test('Should render correctly', () => {
    const component = tree.toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should call function onSubmitEditing', async () => {
    const component = tree.root.findAllByType(TextInput)[0];
    await waitFor(() => component.props.onSubmitEditing());
    expect(props.onSubmitEditing).toHaveBeenCalled();
  });
});
