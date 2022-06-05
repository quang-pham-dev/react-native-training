import React from 'react';
import { Image, Text } from 'react-native';

// LIBS
import renderer from 'react-test-renderer';

// Components
import Title from 'components/Title';
import Reviews from 'screens/ProductDetail/components/Reviews';

// Mock data
import { product } from '__mocks__/dataMock';

describe('Product detail reviewer review', () => {
  const props = {
    comment: product.comment,
    rating: product.rating,
    name: product?.reviewers?.name,
    image: product?.reviewers?.image,
    date: product?.reviewers?.date,
  };

  const tree = renderer.create(<Reviews {...props} />);

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should render with reviewer comment', () => {
    const comment = tree.root.findAllByType(Text)[4];
    expect(comment.props.children).toEqual(props.comment);
    expect(comment.props.children).toBeTruthy();
  });

  test('should render with reviewer rating', () => {
    const rating = tree.root.findAllByType(Text)[2];
    expect(rating.props.children).toEqual(props.rating);
    expect(rating.props.children).toBeTruthy();
  });
});
