//Change to http://10.0.2.2 for android and http://localhost for iOS
export const APP_BASE_URL = 'http://localhost:3000';

// Endpoints
export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
  },

  PRODUCT: {
    GET_PRODUCTS: '/products',
    GET_PRODUCT: '/products/:id',
  },
  BRAND: {
    GET_BRANDS: '/brands',
    GET_BRAND: '/brands/:id',
  },
};

// Auth Data key for local storage
export const AUTH_DATA = '@AuthData';
