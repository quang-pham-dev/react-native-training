import { IUser } from 'types/models/User';

export interface AuthState {
  isLoading: boolean;
  isFirstTime: boolean;
  isAuthenticated: boolean;
  error: string | null;
  isProcessing: boolean;
  currentUser: IUser | undefined;
  signIn(username: string, password: string): Promise<void>;
  signOut(): Promise<void>;
}

export const InitialAuthState: AuthState = {
  isLoading: false,
  isFirstTime: false,
  isAuthenticated: false,
  error: null,
  isProcessing: true,
  currentUser: undefined,
  signIn: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
};
