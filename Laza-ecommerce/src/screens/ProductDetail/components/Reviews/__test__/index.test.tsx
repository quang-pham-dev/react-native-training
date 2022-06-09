import React from 'react';

// LIBS
import renderer from 'react-test-renderer';

// Components
import Title from 'components/Title';
import Reviews from 'screens/ProductDetail/components/Reviews';

// Mock data
import { product } from '__mocks__/dataMock';

describe('Product detail reviewer review', () => {
  const props = {
    comment: product?.comment,
    rating: product?.rating,
    name: product?.reviewers?.name,
    image: product?.reviewers?.image,
    date: product?.reviewers?.date
  };

  const tree = renderer.create(<Reviews {...props} />);

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
