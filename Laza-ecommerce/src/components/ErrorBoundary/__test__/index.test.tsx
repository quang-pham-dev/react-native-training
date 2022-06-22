import React from 'react';

// LIBS
import renderer from 'react-test-renderer';

// Components
import ErrorBoundary from 'components/ErrorBoundary';
// Themes

describe('ErrorBoundary Component', () => {
  const ChildrenComponent = () => {
    throw new Error('Something when wrong');
  };

  const tree = renderer.create(
    <ErrorBoundary>
      <ChildrenComponent />
    </ErrorBoundary>
  );

  test('should render correctly', () => {
    const component = tree.toJSON();
    expect(component).toMatchSnapshot();
  });
});
