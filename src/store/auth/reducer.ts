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
} from './action'

// Types
import {AuthActions, AuthState} from '@state-types/auth'

export const InitialAuthState: AuthState = {
  currentUser: null,
  access_token: null,
  type: '',
  isLoading: false,
  isAuthenticated: false,
  error: null,
}

export const authenticationReducer = (
  state: AuthState = InitialAuthState,
  action: AuthActions,
): AuthState => {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
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
        isAuthenticated: Boolean(action.payload?.access_token),
        currentUser: action.payload?.user,
      }

    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        access_token: action.payload?.access_token,
        currentUser: action.payload?.user,
      }

    case SIGN_OUT_SUCCESS:
      return {
        ...state,
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
        isLoading: false,
        error: action.payload.error,
      }

    default:
      return {
        ...state,
      }
  }
}
