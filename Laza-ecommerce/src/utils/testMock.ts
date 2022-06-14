export const navigationMock: any = {
  addListener: jest.fn(),
  dangerouslyGetParent: jest.fn(),
  dismiss: jest.fn(),
  dispatch: jest.fn(),
  emit: jest.fn(),
  getParam: jest.fn(),
  goBack: jest.fn(),
  isFirstRouteInParent: jest.fn(),
  isFocused: jest.fn(),
  navigate: jest.fn(),
  pop: jest.fn(),
  popToTop: jest.fn(),
  push: jest.fn(),
  replace: jest.fn(),
  reset: jest.fn(),
  router: undefined,
  setParams: jest.fn(),
  route: undefined,
  state: {
    key: '',
    routeName: '',
    params: {},
    path: '',
    index: 1,
    isTransitioning: false,
    routes: []
  }
};
