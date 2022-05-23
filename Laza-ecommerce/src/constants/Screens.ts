export const SCREENS_ROUTES = {
  STACK: {
    AUTH: { name: 'AuthStack' },
    APP: { name: 'AppStack' },
    HOME: { name: 'HomeStack' },
    BAGS: { name: 'BagsStack' },
    WALLET: { name: 'WalletStack' },
    WISHLIST: { name: 'WishListStack' },
  },

  AUTH: {
    SIGN_IN: { name: 'SignIn', label: 'SIGN IN' },
    SIGN_UP: { name: 'SignUp', label: 'SIGN UP' },
    GET_STARTED: { name: 'GetStarted', label: 'GET STARTED' },
  },

  APP: {
    HOME: { name: 'Home', label: 'HOME' },
    DRAWER_MENU: { name: 'DrawerMenu', label: 'MENU' },
    WISHLIST: { name: 'WishList', label: 'WISHLIST' },
    BAGS: { name: 'Bag', label: 'BAG' },
    WALLET: { name: 'Wallet', label: 'WALLET' },
    PRODUCT_DETAIL: { name: 'ProductDetail', label: 'PRODUCT DETAIL' },
    BRAND_DETAIL: { name: 'BrandDetail', label: 'BRAND DETAIL' },
  },

  APP_NAVIGATOR: { name: 'AppNavigator' },
  AUTH_NAVIGATOR: { name: 'AuthNavigator' },
};
