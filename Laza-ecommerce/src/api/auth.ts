// API
import http from 'api/http';

// utils
import { remove } from 'utils/localStorage';

// Constants
import { AUTH_DATA, ENDPOINTS } from 'constants/Common';

// Types
import { IUserResponse } from 'types/models/User';

interface IAuthResponse {
  data: IUserResponse;
}

// sign in with username and password
const signIn = async (username: string, password: string): Promise<IAuthResponse> => {
  return await http.post(ENDPOINTS.AUTH.LOGIN, { username, password });
};

// Sign Out
const signOut = async (): Promise<void> => {
  return await remove(AUTH_DATA);
};

export const authService = {
  signIn,
  signOut
};
