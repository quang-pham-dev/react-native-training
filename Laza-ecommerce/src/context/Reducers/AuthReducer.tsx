import { AuthAction } from 'types/Actions';
import { AuthState } from 'context/State/AuthState';

// handler for reducer
const handlers = {
  INITIALIZE: (state: AuthState, action: AuthAction) => {
    const { user } = action.payload;
    return {
      ...state,
      isInitialized: true,
      currentUser: user,
      isAuthenticated: Boolean(user),
    };
  },
  SIGN_IN: (state: AuthState, action: AuthAction) => {
    const { user, access_token } = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      isLoggedIn: true,
      access_token,
      currentUser: user,
    };
  },
  SIGN_OUT: (state: AuthState) => {
    return {
      ...state,
      isAuthenticated: false,
      isLoggedIn: false,
      user: undefined,
      access_token: undefined,
      currentUser: undefined,
    };
  },
};
export const authReducer = (state: AuthState, action: AuthAction) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;
