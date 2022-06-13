import {
  INITIALIZE,
  INITIALIZE_FAILED,
  INITIALIZE_SUCCESS,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILED,
  SIGN_IN_FAILED,
  SIGN_OUT,
  SIGN_OUT_SUCCESS,
  RESET_STATE,
} from 'contexts/actions/auth';

// Types
import { AuthAction } from 'types/context/actions/Auth';
import { AuthState } from 'types/context/reducers/Auth';

export const InitialAuthState: AuthState = {
  isLoading: false,
  isFirstTime: false,
  isAuthenticated: false,
  error: null,
  isProcessing: true,
  currentUser: undefined,
};

const authenticationReducer = (state: typeof InitialAuthState, action: AuthAction) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        isInitialized: false,
        isProcessing: false,
        isLoading: false,
      };

    case SIGN_IN:
    case SIGN_OUT:
      return {
        ...state,
        isProcessing: true,
        isLoading: true,
      };

    case INITIALIZE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        type: action.type,
        isInitialized: true,
        isProcessing: false,
        isAuthenticated: Boolean(action.payload?.access_token),
        currentUser: action.payload?.user,
      };

    case SIGN_IN_SUCCESS:
      return {
        ...state,
        type: action.type,
        isProcessing: false,
        isAuthenticated: true,
        access_token: action.payload?.access_token,
        currentUser: action.payload?.user,
      };

    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        type: action.type,
        isProcessing: false,
        isAuthenticated: false,
        access_token: null,
        currentUser: null,
      };

    case INITIALIZE_FAILED:
    case SIGN_IN_FAILED:
    case SIGN_OUT_FAILED:
      return {
        ...state,
        type: action.type,
        isLoading: false,
        isProcessing: false,
        error: action.error,
      };

    case RESET_STATE:
      return {
        ...InitialAuthState,
      };

    default:
      return {
        ...state,
      };
  }
};

export default authenticationReducer;
