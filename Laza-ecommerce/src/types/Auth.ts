import { User } from './User';

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthContextValue {
  currentUser: User | undefined;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export interface LoginBody {
  username: string;
  password: string;
}
