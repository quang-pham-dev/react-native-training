import {UserResponse} from '@apis'
import {IUser} from '@model-types'
import {
  INITIALIZE,
  INITIALIZE_SUCCESS,
  INITIALIZE_FAILED,
  SIGN_IN,
  SIGN_IN_FAILED,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGN_OUT_FAILED,
  SIGN_OUT_SUCCESS,
} from '@store'
import {IErrorItem} from './error'

export type AuthState = {
  currentUser: IUser | null
  access_token: string | null
  isAuthenticated: boolean
  error: string | null
  type: string
  isLoading: boolean
}

export interface IInitialize {
  type: typeof INITIALIZE
  payload: {}
}
export interface IInitializeSuccess {
  type: typeof INITIALIZE_SUCCESS
  payload: UserResponse
}
export interface IInitializeFailed {
  type: typeof INITIALIZE_FAILED
  payload: IErrorItem
}

export interface ISignIn {
  type: typeof SIGN_IN
  payload: {}
}

export interface ISignInSuccess {
  type: typeof SIGN_IN_SUCCESS
  payload: UserResponse
}

export interface ISignInFailed {
  type: typeof SIGN_IN_FAILED
  payload: IErrorItem
}

export interface ISignOut {
  type: typeof SIGN_OUT
  payload: {}
}

export interface ISignOutSuccess {
  type: typeof SIGN_OUT_SUCCESS
  payload: {}
}

export interface ISignOutFailed {
  type: typeof SIGN_OUT_FAILED
  payload: IErrorItem
}

export type AuthActions =
  | IInitialize
  | IInitializeSuccess
  | IInitializeFailed
  | ISignIn
  | ISignInSuccess
  | ISignInFailed
  | ISignOut
  | ISignOutSuccess
  | ISignOutFailed
