import {
  // INITIALIZE
  INITIALIZE,
  INITIALIZE_FAILED,
  INITIALIZE_SUCCESS,
  // SIGN_IN
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILED,
  SIGN_IN_FAILED,
  // SIGN_OUT
  SIGN_OUT,
  SIGN_OUT_SUCCESS,
} from '@contexts/auth/actions/auth'

// Types
import {AuthAction, AuthState} from '@state-types'

export const InitialAuthState: AuthState = {
  isLoading: false,
  isAuthenticated: false,
  error: null,
  currentUser: undefined,
}

const authenticationReducer = (
  state: typeof InitialAuthState,
  action: AuthAction,
) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        isInitialized: false,
        isLoading: false,
      }

    case SIGN_IN:
    case SIGN_OUT:
      return {
        ...state,
        isLoading: true,
      }

    case INITIALIZE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        type: action.type,
        isInitialized: true,
        isAuthenticated: Boolean(action.payload?.access_token),
        currentUser: action.payload?.user,
      }

    case SIGN_IN_SUCCESS:
      return {
        ...state,
        type: action.type,
        isLoading: false,
        isAuthenticated: true,
        access_token: action.payload?.access_token,
        currentUser: action.payload?.user,
      }

    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        type: action.type,
        isLoading: false,
        isAuthenticated: false,
        access_token: null,
        currentUser: null,
      }

    case INITIALIZE_FAILED:
    case SIGN_IN_FAILED:
    case SIGN_OUT_FAILED:
      return {
        ...state,
        type: action.type,
        isLoading: false,
        error: action.error,
      }

    default:
      return {
        ...state,
      }
  }
}

export default authenticationReducer
