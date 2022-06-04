import React from 'react';

// Reducer
import authenticationReducer from 'context/reducers/auth';

// State
import { InitialAuthState } from 'context/state/auth';

// Actions
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
} from 'context/actions/auth';

// Mocks
import { user } from '__mocks__/dataMock/user';

describe('authReducer', () => {
  const UserResponse = {
    access_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    user: user,
  };

  test('should handle INITIALIZE', () => {
    return expect(
      authenticationReducer(InitialAuthState, {
        type: INITIALIZE,
        payload: UserResponse,
      }),
    ).toEqual({
      ...InitialAuthState,
      isInitialized: false,
      isProcessing: false,
      isLoading: false,
    });
  });
  test('should handle INITIALIZE_SUCCESS', () => {
    return expect(
      authenticationReducer(InitialAuthState, {
        type: INITIALIZE_SUCCESS,
        payload: UserResponse,
      }),
    ).toEqual({
      ...InitialAuthState,
      type: INITIALIZE_SUCCESS,
      isLoading: false,
      isInitialized: true,
      isProcessing: false,
      isAuthenticated: true,
      currentUser: user,
    });
  });

  test('should handle SIGN_IN', () => {
    return expect(
      authenticationReducer(InitialAuthState, {
        type: SIGN_IN,
        payload: UserResponse,
      }),
    ).toEqual({
      ...InitialAuthState,
      isProcessing: true,
      isLoading: true,
    });
  });
  test('should handle SIGN_IN_SUCCESS', () => {
    return expect(
      authenticationReducer(InitialAuthState, {
        type: SIGN_IN_SUCCESS,
        payload: UserResponse,
      }),
    ).toEqual({
      ...InitialAuthState,
      type: SIGN_IN_SUCCESS,
      isProcessing: false,
      isAuthenticated: true,
      access_token: UserResponse.access_token,
      currentUser: user,
    });
  });

  test('should handle SIGN_OUT', () => {
    return expect(
      authenticationReducer(InitialAuthState, {
        type: SIGN_OUT,
        payload: UserResponse,
      }),
    ).toEqual({
      ...InitialAuthState,
      isProcessing: true,
      isLoading: true,
    });
  });
  test('should handle SIGN_OUT_SUCCESS', () => {
    return expect(
      authenticationReducer(InitialAuthState, {
        type: SIGN_OUT_SUCCESS,
        payload: UserResponse,
      }),
    ).toEqual({
      ...InitialAuthState,
      type: SIGN_OUT_SUCCESS,
      isProcessing: false,
      isAuthenticated: false,
      access_token: null,
      currentUser: null,
    });
  });

  test('should handle INITIALIZE_FAILED', () => {
    return expect(
      authenticationReducer(InitialAuthState, {
        type: INITIALIZE_FAILED,
        payload: UserResponse,
      }),
    ).toEqual({
      ...InitialAuthState,
      type: INITIALIZE_FAILED,
      isLoading: false,
      isProcessing: false,
      error: undefined,
    });
  });
  test('should handle SIGN_OUT_FAILED', () => {
    return expect(
      authenticationReducer(InitialAuthState, {
        type: SIGN_OUT_FAILED,
        payload: UserResponse,
      }),
    ).toEqual({
      ...InitialAuthState,
      type: SIGN_OUT_FAILED,
      isLoading: false,
      isProcessing: false,
      error: undefined,
    });
  });
  test('should handle SIGN_IN_FAILED', () => {
    return expect(
      authenticationReducer(InitialAuthState, {
        type: SIGN_IN_FAILED,
        payload: UserResponse,
      }),
    ).toEqual({
      ...InitialAuthState,
      type: SIGN_IN_FAILED,
      isLoading: false,
      isProcessing: false,
      error: undefined,
    });
  });

  test('should handle RESET_STATE', () => {
    return expect(
      authenticationReducer(InitialAuthState, {
        type: RESET_STATE,
        payload: UserResponse,
      }),
    ).toEqual({
      ...InitialAuthState,
      isLoading: false,
      isProcessing: true,
      error: null,
    });
  });
});
