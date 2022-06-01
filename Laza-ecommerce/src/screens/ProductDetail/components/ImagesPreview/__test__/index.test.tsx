import React from 'react';

// LIBS
import renderer from 'react-test-renderer';

// Components
import ImagesPreview from 'screens/ProductDetail/components/ImagesPreview';

// Mock data
import { product } from '__mocks__/dataMock';

describe('Product detail Images review', () => {
  const tree = renderer.create(<ImagesPreview imagesPreview={product.imagesPreview} />);

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
