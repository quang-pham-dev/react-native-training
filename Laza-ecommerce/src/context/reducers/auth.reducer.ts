import {
  AuthAction,
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
} from 'context/actions/auth.actions';
import { AuthState, InitialAuthState } from 'context/state/auth.state';

const authenticationReducer = (state: AuthState = InitialAuthState, action: AuthAction) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        isInitialized: false,
        isProcessing: false,
      };

    case SIGN_IN:
    case SIGN_OUT:
      return {
        ...state,
        isProcessing: true,
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
        isSignout: false,
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
        isSignout: true,
      };

    case INITIALIZE_FAILED:
    case SIGN_IN_FAILED:
    case SIGN_OUT_FAILED:
      return {
        ...state,
        type: action.type,
        isLoading: false,
        error: action.error,
      };

    case RESET_STATE:
      return {
        ...InitialAuthState,
      };

    default:
      /* If this reducer doesn't recognize the action type, or doesn't
     care about this specific action, return the existing state unchanged */
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export default authenticationReducer;
