import { User } from 'types/User';

export interface AuthState {
  isFirstTime: boolean;
  isAuthenticated: boolean;
  currentUser: User | undefined;
  isLoading: boolean;
  error: string | null;
  signIn(emailAddress: string, password: string): Promise<void>;
  signOut(): Promise<void>;
}

export const InitialAuthState: AuthState = {
  isFirstTime: false,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  currentUser: undefined,
  signIn: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
};
