import { IUser } from 'types/models/User';

export interface AuthState {
  isLoading: boolean;
  isFirstTime: boolean;
  isAuthenticated: boolean;
  error: string | null;
  isProcessing: boolean;
  currentUser: IUser | undefined;
}
