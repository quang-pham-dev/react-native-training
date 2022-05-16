import { User } from 'types/User';

export interface AuthState {
  isAuthenticated: boolean;
  currentUser: User | undefined;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
  signIn(emailAddress: string, password: string): Promise<void>;
  signOut(): Promise<void>;
}

export const InitialAuthState: AuthState = {
  isAuthenticated: false,
  isLoggedIn: false,
  error: null,
  isLoading: false,
  currentUser: undefined,
  signIn: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
};
