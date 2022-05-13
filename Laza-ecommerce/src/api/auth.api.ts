import { UserResponse } from 'types/User';
import { remove } from 'utils/localStorage';
import http from './http';

const signIn = (username: string, password: string): Promise<UserResponse> => {
  return http.post('auth/login', { username, password });
};
const signOut = (): Promise<void> => {
  //   return http.post('auth/signOut');
  return remove('data');
};

export const authService = {
  signIn,
  signOut,
};
