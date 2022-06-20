import React from 'react';

// LIBS
import { cleanup } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

// Screens
import BrandDetail from 'screens/BrandDetail';

// Utils
import { navigationMock } from 'utils/testMock';

// Mock data
import { brand } from '__mocks__/dataMock/brands';

describe('Brand detail Screen', () => {
  let tree: any;
  beforeEach(() => {
    tree = renderer.create(
      <BrandDetail
        navigation={navigationMock}
        route={{
          params: brand.id
        }}
      />
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
    cleanup();
  });

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
