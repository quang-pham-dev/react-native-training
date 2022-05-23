export const SCREENS_ROUTES = {
  STACK: {
    APP: { name: 'AppStack' },
    AUTH: { name: 'AuthStack' },
    HOME: { name: 'HomeStack' },
    BAGS: { name: 'BagsStack' },
    WALLET: { name: 'WalletStack' },
    WISHLIST: { name: 'WishListStack' },
  },

  // routes for the auth stack
  AUTH_STACK: {
    SIGN_IN_SCREEN: { name: 'SignIn', label: 'SIGN IN' },
    SIGN_UP_SCREEN: { name: 'SignUp', label: 'SIGN UP' },
    GET_STARTED_SCREEN: { name: 'GetStarted', label: 'GET STARTED' },
  },

  // routes for the home stack
  HOME_STACK: {
    HOME_SCREEN: { name: 'Home', label: 'HOME' },
    DRAWER_MENU: { name: 'DrawerMenu', label: 'MENU' },
    PRODUCT_DETAIL_SCREEN: { name: 'ProductDetail', label: 'PRODUCT DETAIL' },
    BRAND_DETAI_SCREENL: { name: 'BrandDetail', label: 'BRAND DETAIL' },
  },

  // routes for the bags stack
  WISHLIST_STACK: {
    WISHLIST_SCREEN: { name: 'WishList', label: '   WISHLIST' },
  },
  // routes for the bags stack
  BAGS_STACK: {
    BAGS_SCREEN: { name: 'Bags', label: 'BAGS' },
  },

  // routes for the wallet stack
  WALLET_STACK: {
    WALLET_SCREEN: { name: 'Wallet', label: 'WALLET' },
  },

  APP_NAVIGATOR: { name: 'AppNavigator' },
  AUTH_NAVIGATOR: { name: 'AuthNavigator' },
};
