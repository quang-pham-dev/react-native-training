import { Alert } from 'react-native';

// API
import http from 'api/http';

// utils
import { remove } from 'utils/localStorage';

// Constants
import { AUTH_DATA, ENDPOINTS } from 'constants/Common';

// sign in with username and password
const signIn = async (username: string, password: string) => {
  return await http.post(ENDPOINTS.AUTH.LOGIN, { username, password });
};

// Sign Out
const signOut = async () => {
  return await remove(AUTH_DATA);
};

export const authService = {
  signIn,
  signOut,
};
